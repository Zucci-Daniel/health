import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import notifee, {
  AndroidImportance,
  TimestampTrigger,
  RepeatFrequency,
  TriggerType,
} from '@notifee/react-native';
import {useSheet} from '../../hooks/useSheet';
import {storeSliceType} from '../../redux/storeType';
import {inputType, MedicationReminder, MedicationTime} from './type';
import {reset, setCurrentUser} from '../../redux/global-store/storeSlice';
import {logThis} from '../../helpers';
import {generateUniqueId} from '../../helpers/general';
import {useSilentToast} from '../../presenters/h-toast';

export const useDashboard = () => {
  const dispatch: any = useDispatch();
  const showToast = useSilentToast();
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
    onReset();
    // Close sheet
    closeSheet();

    const response: Array<MedicationTime> | undefined =
      await onCreateTriggerNotification(
        `It's time to take your ${newMed.name} drug, please do take it!`,
        +newMed.frequency,
        newMed.time,
      );

    if (response) {
      const payload: MedicationReminder = {
        ...newMed,
        time: response,
        id: `${generateUniqueId()}`,
      };
      // Add medication to the med array
      setMedications(prev => [payload, ...prev]);

      // Reset the state.
      setNewMed({
        id: '',
        dosage: '',
        name: '',
        frequency: '',
        time: [], // array of obj with period and time. { day: 'Morning', time: '2023-08-25T18:03:48.000Z' }
      });
    }
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

  const calculateScheduledTimestamp = (scheduledTime: Date): number => {
    const now = new Date();
    let scheduledTimestamp = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      scheduledTime.getHours(),
      scheduledTime.getMinutes(),
    ).getTime();

    if (scheduledTimestamp <= now.getTime()) {
      scheduledTimestamp += 24 * 60 * 60 * 1000; // Add one day in milliseconds
    }

    return scheduledTimestamp;
  };

  const createNotificationChannel = async (channelID: string) => {
    await notifee.createChannel({
      id: channelID,
      name: `Health Medication Reminder`,
      lights: false,
      vibration: true,
      importance: AndroidImportance.HIGH,
    });
  };

  const createTriggerNotification = async (
    message: string,
    channelID: string,
    scheduledTime: Date,
    frequency: number,
  ) => {
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: scheduledTime.getTime(),
      repeatFrequency: RepeatFrequency.DAILY,
      alarmManager: true,
    };

    await notifee.requestPermission();

    const id = await notifee.createTriggerNotification(
      {
        title: `Medication Reminder`,
        body: message,
        android: {
          channelId: channelID,
        },
      },
      trigger,
    );

    return id;
  };

  const onCreateTriggerNotification = async (
    message: string,
    frequency: number,
    timeArray: Array<MedicationTime>,
  ): Promise<Array<MedicationTime> | undefined> => {
    try {
      const channelID: string = 'health';
      const noticeIDs: Array<MedicationTime> = [];

      for (let i = 0; i < timeArray.length; i++) {
        const {day, time: scheduledTime} = timeArray[i];
        const scheduledTimestamp = calculateScheduledTimestamp(scheduledTime);

        await createNotificationChannel(channelID);

        const id = await createTriggerNotification(
          `Hi${user?.name ? ` ${user.name}!` : '!'}, ${message}`,
          channelID,
          scheduledTime,
          frequency,
        );

        noticeIDs.push({id, day, time: scheduledTime});
      }
      if (noticeIDs.length > 1) {
        return noticeIDs;
      } else {
        // showToast('info', "Couldn't schedule your notification! try again");
        return noticeIDs;
      }
    } catch (error: any) {
      if (`${error?.message}`.includes('date must be in the future')) {
        showToast('info', 'Time has past! use a future time!');
      }
      logThis(error);
      // return [];
    }
  };

  const cancelTriggeredNotification = async (id: string) => {
    return await notifee.cancelTriggerNotification(id);
  };

  const onReset = () => {
    // if (isUpdating) {
    setIsUpdating(false);
    setNewMed({
      id: '',
      dosage: '',
      name: '',
      frequency: '',
      time: [], // array of obj with period and time. { day: 'Morning', time: '2023-08-25T18:03:48.000Z' }
    });
    // }
  };

  //incase we're editing a reminder
  const renderInitialTime = (period: string) => {
    //loop through the newMed.time and check for the period that matches, then return the time for that period
    const item = newMed.time.find((item, _) =>
      item.day.toLowerCase() == period.toLowerCase() ? item : undefined,
    );

    return item;
  };

  const removeInitialTime = async (period: string) => {
    let idToRemove: string | null = null;

    const filteredTime = newMed.time.filter(item => {
      if (item.day.toLowerCase() !== period.toLowerCase()) {
        return item; // Keep items that do not match the period
      } else {
        idToRemove = `${item.id}`;
        return null; // Exclude the item that matches the period
      }
    });

    setNewMed({...newMed, time: filteredTime});

    if (idToRemove) {
      await cancelTriggeredNotification(idToRemove);
    }
  };

  const updateTime = (day: string, time: Date) => {
    const updatedTimeArray = newMed.time.map(item =>
      item.day === day ? {...item, time} : item,
    );
    const existingItemIndex = updatedTimeArray.findIndex(
      item => item.day === day,
    );

    if (existingItemIndex === -1) {
      updatedTimeArray.push({day, time});
    }

    setNewMed({...newMed, time: updatedTimeArray});
  };

  return {
    addMedSheetRef,
    renderInitialTime,
    removeInitialTime,
    updateTime,
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
