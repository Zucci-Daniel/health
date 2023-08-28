import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import notifee, {
  AndroidImportance,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {generateUniqueId} from '../../helpers/general';
import {useSheet} from '../../hooks/useSheet';
import {storeSliceType} from '../../redux/storeType';
import {inputType, MedicationReminder} from './type';
import {setCurrentUser} from '../../redux/global-store/storeSlice';
import {logThis} from '../../helpers';

export const useDashboard = () => {
  const dispatch: any = useDispatch();
  const addMedSheetRef = useRef(null);
  //accessing the user state from redux
  const {user} = useSelector((state: storeSliceType) => state.storeReducer);

  const {closeSheet, openSheet} = useSheet(addMedSheetRef);
  //local states
  const [isUpdating, setIsUpdating] = useState(false);
  const [newMed, setNewMed] = useState<MedicationReminder>({
    id: '',
    name: '',
    dosage: '',
    time: [],
    frequency: '',
  });

  const [medications, setMedications] = useState<Array<MedicationReminder>>([]);

  const inputs: Array<inputType> = [
    {
      label: 'Enter Drug Name',
      value: newMed.name,
      onChangeText: (text: string) => onChangeNewMed('name', text),
      //..add more.
    },
    {
      label: 'Enter Dosage e.g 2pills/1ml',
      value: newMed.dosage,
      onChangeText: (text: string) => onChangeNewMed('dosage', text),
      keyboardType: 'phone-pad',
      //..add more.
    },
    {
      label: 'How many days will you take this drug?',
      value: `${newMed.frequency}`,
      onChangeText: (text: string) => onChangeNewMed('frequency', text),
      keyboardType: 'phone-pad',
      //..add more.
    },
  ];

  //a second check incase the user name is lost. (serving as unauthorized error 401)
  useEffect(() => {
    if (!user?.name) {
      dispatch(setCurrentUser(null));
    }
  }, []);

  const onChangeNewMed = (field: string, value: string) => {
    return setNewMed({...newMed, [field]: value});
  };

  const handleAddMed = async () => {
    // Close sheet
    closeSheet();

    // Add medication to the med array
    setMedications(prev => [{...newMed, id: `${generateUniqueId()}`}, ...prev]);

    // Create reminders for each time in the array
    await Promise.all(
      newMed.time.map(async item => {
        await onCreateTriggerNotification(
          item.time.getTime(),
          `It's time to take your ${newMed.name} drug, please do take it!`,
          +newMed.frequency,
        );
      }),
    );

    // Reset the state.
    setNewMed({
      id: '',
      dosage: '',
      name: '',
      frequency: '',
      time: [], // array of obj with period and time. { day: 'Morning', time: '2023-08-25T18:03:48.000Z' }
    });
  };

  const handleDeleteMedication = (id: string) => {
    const filter = medications.filter(med => med.id !== id);
    setMedications(filter);
  };

  const updateMedication = (item: MedicationReminder) => {
    //set the whole med to the state.
    setIsUpdating(true);
    setNewMed(item);
    openSheet();
  };

  const finalUpdate = () => {
    //find the drug that has the same id
    const drug = medications.map(item =>
      item.id == newMed?.id ? {...item, ...newMed} : item,
    );
    setMedications(drug);
    closeUpdateSheet();
  };

  const closeUpdateSheet = () => {
    closeSheet();
    setIsUpdating(false);
    setNewMed({
      id: '',
      dosage: '',
      name: '',
      frequency: '',
      time: [], //array of obj with period and time. {period:'Morning',time:'2023-08-25T18:03:48.000Z'}
    });
  };

  const shouldDisableButton = () => {
    const isAnyFieldEmpty = (object: MedicationReminder) =>
      Object.keys(object)
        .filter(key => key !== 'id') //excluding the id, since it'll be added on submit.
        .some(key => {
          const value = object[key as keyof MedicationReminder];
          if (Array.isArray(value)) {
            return value.length === 0;
          } else if (typeof value === 'string') {
            return value === '';
          } else {
            return false;
          }
        });

    const response = isAnyFieldEmpty(newMed);
    return response;
  };

  //---for a single notification.
  // const onCreateTriggerNotification = async (
  //   time: number,
  //   message: string,
  //   frequency: number,
  // ) => {
  //   try {
  //     const channelID: string = 'health';
  //     //schedule a reminder
  //     const trigger: TimestampTrigger = {
  //       type: TriggerType.TIMESTAMP,
  //       timestamp: time,
  //       alarmManager: true,
  //       repeatFrequency: frequency,

  //     };

  //     //create a notification channel
  //     await notifee.createChannel({
  //       id: channelID,
  //       name: `Health Medication Reminder`,
  //       lights: false,
  //       vibration: true,
  //       importance: AndroidImportance.HIGH,
  //     });

  //     await notifee.requestPermission();

  //     // Create a trigger notification
  //     await notifee.createTriggerNotification(
  //       {
  //         title: `Medication Reminder`,
  //         body: `Hi${
  //           user?.name !== '' && user?.name !== undefined
  //             ? ` ${user?.name}!`
  //             : '!'
  //         }, ${message}`, // just making up readable strings
  //         android: {
  //           channelId: channelID,
  //         },
  //       },
  //       trigger,
  //     );
  //   } catch (error) {
  //     logThis(error);
  //   }
  // };

  //--creating notification at once based on the number of times
  const onCreateTriggerNotification = async (
    time: number,
    message: string,
    frequency: number,
  ) => {
    try {
      const channelID: string = 'health';
      const now = Date.now();

      // Calculate the interval between notifications
      const interval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      // Schedule notifications based on the specified frequency
      for (let i = 0; i < frequency; i++) {
        const trigger: TimestampTrigger = {
          type: TriggerType.TIMESTAMP,
          timestamp: now + time + i * interval,
          alarmManager: true,
          repeatFrequency: 0, // No need to repeat individual notifications
        };

        // Create a notification channel if not already created
        await notifee.createChannel({
          id: channelID,
          name: `Health Medication Reminder`,
          lights: false,
          vibration: true,
          importance: AndroidImportance.HIGH,
        });

        // Request notification permission if not already granted
        await notifee.requestPermission();

        // Create a trigger notification for each frequency
        await notifee.createTriggerNotification(
          {
            title: `Medication Reminder`,
            body: `Hi${
              user?.name !== '' && user?.name !== undefined
                ? ` ${user?.name}!`
                : '!'
            }, ${message}`, // just making up readable strings
            android: {
              channelId: channelID,
            },
          },
          trigger,
        );
      }
    } catch (error) {
      logThis(error);
    }
  };

  const onReset = () => {
    setIsUpdating(false);
    setNewMed({
      id: '',
      dosage: '',
      name: '',
      frequency: '',
      time: [],
    });
  };

  return {
    addMedSheetRef,
    closeSheet,
    openSheet,
    newMed,
    setNewMed,
    medications,
    setMedications,
    inputs,
    handleAddMed,
    handleDeleteMedication,
    updateMedication,
    closeUpdateSheet,
    isUpdating,
    finalUpdate,
    user,
    shouldDisableButton,
    onReset,
  };
};
