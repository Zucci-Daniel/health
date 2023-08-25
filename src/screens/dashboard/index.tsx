import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Typo} from '../../configs/Typography';
import {HflatScreen, Hscreen} from '../../containers';
import {useSheet} from '../../hooks/useSheet';
import {Hbutton, Hheader, Hinput, HreminderCard} from '../../presenters';
import {AppSheet, AppText} from '../../reusables';
import {DashboardScreenStyles} from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import {pallete} from '../../configs/Colors';
import DatePicker from 'react-native-date-picker';
import {convertToTime, generateUniqueId} from '../../helpers/general';
import {inputType, MedicationReminder} from './type';

const Period = ({
  day = 'Afternoon',
  getTime = (day: string, time: any) => ({day, time}),
}: {
  day: string;
  getTime?: (day: string, time: any) => void;
}) => {
  const [time, setTime] = useState<any>();
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    time && getTime(day, time);
  }, [time]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowTime(true)}
        style={DashboardScreenStyles.periodRow}>
        <AppText
          styles={Typo().P1}
          text={`Taken in the ${day} ${
            time ? `(by ${convertToTime(time)})` : ''
          }`}
        />
        <ToggleSwitch
          isOn={time ? true : false}
          onColor={pallete.success}
          offColor={pallete.screen}
          size="medium"
          onToggle={() => {
            if (time) {
              setTime(null);
            } else {
              setShowTime(!showTime);
            }
          }}
        />
      </TouchableOpacity>
      {showTime && (
        <DatePicker
          mode="time"
          modal
          open={showTime}
          date={time ? time : new Date()}
          onConfirm={newTime => {
            setShowTime(false);
            setTime(newTime);
          }}
          onCancel={() => {
            setShowTime(false);
          }}
        />
      )}
    </>
  );
};

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  const addMedSheetRef = useRef(null);
  const updateMedSheetRef = useRef(null);
  const {closeSheet: closeUpdateSheetRef, openSheet: openUpdateSheetRef} =
    useSheet(addMedSheetRef);
  const {closeSheet, openSheet} = useSheet(addMedSheetRef);
  //
  const [newMed, setNewMed] = useState<MedicationReminder>({
    id: '',
    name: '',
    dosage: '',
    time: [],
    frequency: '', //
  });

  const [medications, setMedications] = useState<Array<MedicationReminder>>([]);

  const onChangeNewMed = (field: any /* Zucci: TODO */, value: string) => {
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

  const renderCards = (item: MedicationReminder, _: number) => {
    return (
      <HreminderCard
        dosage={item.dosage}
        frequency={item.frequency}
        name={item.name}
        time={item.time}
        onDelete={() => handleDeleteMedication(item.id)}
      />
    );
  };

  return (
    <>
      <Hheader
        title="Upcoming Medications"
        text="Add Med"
        onPressLeftAction={() => openSheet()}
      />

      <HflatScreen
        data={medications}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item, index}) => renderCards(item, index)}
        ItemSeparatorComponent={() => (
          <View style={DashboardScreenStyles.separator} />
        )}
      />
      <AppSheet adjustToContentHeight={true} sheetRef={addMedSheetRef}>
        <View style={DashboardScreenStyles.sheetContainer}>
          <AppText styles={Typo().h4} text={`Tell me your medication 🙂`} />
          {inputs.map(({label, value, onChangeText, keyboardType}, index) => (
            <Hinput
              onChangeText={onChangeText}
              value={value}
              key={index}
              placeHolder={label}
              keyboardType={keyboardType}
            />
          ))}
          <AppText
            styles={Typo(pallete.dark).Button}
            text={`When should you take this drug? 🙂`}
          />
          {['Morning', 'Afternoon', 'Evening'].map((period, index) => (
            <Period
              day={period}
              key={index}
              getTime={(day, time) =>
                setNewMed({...newMed, time: [...newMed.time, {day, time}]})
              }
            />
          ))}
          <Hbutton text="Add to medications" onPress={handleAddMed} />
        </View>
      </AppSheet>
    </>
  );
};

export default DashboardScreen;
