import {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {generateUniqueId} from '../../helpers/general';
import {useSheet} from '../../hooks/useSheet';
import {storeSliceType} from '../../redux/storeType';
import {inputType, MedicationReminder} from './type';
//---
import {createAlarm, getAlarms} from 'react-native-simple-alarm';
import {logThis} from '../../helpers';

export const useDashboard = () => {
  const {user} = useSelector((state: storeSliceType) => state.storeReducer);
  const addMedSheetRef = useRef(null);

  const {closeSheet, openSheet} = useSheet(addMedSheetRef);
  //
  const [isUpdating, setIsUpdating] = useState(false);
  const [newMed, setNewMed] = useState<MedicationReminder>({
    id: '',
    name: '',
    dosage: '',
    time: [],
    frequency: '',
  });

  const [medications, setMedications] = useState<Array<MedicationReminder>>([]);

  const onChangeNewMed = (field: string, value: string) => {
    return setNewMed({...newMed, [field]: value});
  };

  //--- for adding
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

  //--- for updating

  const handleAddMed = async () => {
    // Close sheet
    closeSheet();

    // Add medication to the med array
    setMedications(prev => [{...newMed, id: `${generateUniqueId()}`}, ...prev]);

    // Create alarms for each time in the array
    await Promise.all(
      newMed.time.map(async item => {
        await handleCreateAlarm(
          item.time,
          `Please take your drugs by ${item.day}`,
        );
      }),
    );

    // Reset the state.
    setNewMed({
      id: '',
      dosage: '',
      name: '',
      frequency: '',
      time: [], // array of obj with period and time. { period: 'Morning', time: '2023-08-25T18:03:48.000Z' }
    });
  };

  const handleDeleteMedication = (id: string) => {
    const filter = medications.filter(med => med.id !== id);
    setMedications(filter);
  };

  const updateMedication = (item: MedicationReminder) => {
    //set the whole med to the stat.
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

  //--create an alarm

  const handleCreateAlarm = async (time: any, message: string) => {
    try {
      const payload = {
        active: true,
        date: time,
        message: 'message',
        snooze: 1,
      };
      const response = await createAlarm(payload);
      //if response, meaning alarm is created.
    } catch (e) {
      logThis('error == >', e);
    }
  };

  const handleGetAllAlarms = async () => {
    try {
      const alarms = await getAlarms();
      console.log(alarms, ' all alarms');
    } catch (e) {}
  };

  useEffect(() => {
    handleGetAllAlarms();
  }, []);

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
  };
};
