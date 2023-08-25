import {useRef, useState} from 'react';
import {generateUniqueId} from '../../helpers/general';
import {useSheet} from '../../hooks/useSheet';
import {inputType, MedicationReminder} from './type';

export const useDashboard = () => {
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

  const handleAddMed = () => {
    closeSheet();
    setNewMed({
      id: '',
      dosage: '',
      name: '',
      frequency: '',
      time: [], //array of obj with period and time. {period:'Morning',time:'2023-08-25T18:03:48.000Z'}
    });

    setMedications(prev => [{...newMed, id: `${generateUniqueId()}`}, ...prev]);
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
  };
};
