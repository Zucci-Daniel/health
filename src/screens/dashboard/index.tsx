import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Typo} from '../../configs/Typography';
import {HflatScreen, Hscreen} from '../../containers';
import {logThis} from '../../helpers';
import {useSheet} from '../../hooks/useSheet';
import {Hbutton, Hheader, Hinput, HreminderCard} from '../../presenters';
import {AppSheet, AppText} from '../../reusables';
import {DashboardScreenStyles} from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import {pallete} from '../../configs/Colors';

const Period = ({
  day = 'Afternoon',
}: {
  day: 'Morning' | 'Afternoon' | 'Evening';
}) => {
  const [time, setTime] = useState();
  const [showTime, setShowTime] = useState(false);

  return (
    <>
      <View style={DashboardScreenStyles.periodRow}>
        <AppText styles={Typo().P4} text={`Taken in the ${day}`} />

        <ToggleSwitch
          isOn={showTime}
          onColor={pallete.success}
          offColor={pallete.screen}
          size="medium"
          onToggle={() => {
            setShowTime(!showTime);
          }}
        />
      </View>
      {showTime && <View style={DashboardScreenStyles.time}></View>}
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
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: [],
    time: '',
  });

  const onChangeNewMed = (field: any /* Zucci: TODO */, value: string) => {
    return setNewMed({...newMed, [field]: value});
  };

  //--- for adding
  const inputs = [
    {
      label: 'Enter Drug Name',
      value: newMed.name,
      onChangeText: (text: string) => onChangeNewMed('name', text),
      //..add more.
    },
    {
      label: 'Enter Dosage',
      value: newMed.dosage,
      onChangeText: (text: string) => onChangeNewMed('dosage', text),
      //..add more.
    },
  ];

  //--- for updating

  const handleAddMed = () => {
    logThis(newMed, ' new med');
    closeSheet();
    setNewMed({
      dosage: '',
      frequency: '',
      name: '',
      time: '',
    });
  };

  return (
    <>
      <Hheader
        title="Upcoming Medications"
        text="Add Med"
        onPressLeftAction={() => openSheet()}
      />

      <HflatScreen
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item, index}) => <HreminderCard />}
        ItemSeparatorComponent={() => (
          <View style={DashboardScreenStyles.separator} />
        )}
      />
      <AppSheet adjustToContentHeight={true} sheetRef={addMedSheetRef}>
        <View style={DashboardScreenStyles.sheetContainer}>
          <AppText styles={Typo().h4} text={`Tell me your medication 🙂`} />
          {inputs.map(({label, value, onChangeText}, index) => (
            <Hinput
              onChangeText={onChangeText}
              value={value}
              key={index}
              placeHolder={label}
            />
          ))}
          <AppText
            styles={Typo(pallete.dark).Button}
            text={`When should you take this drug? 🙂`}
          />
          {['Morning', 'Afternoon', 'Evening'].map((period, index) => (
            <Period day={period} key={index} />
          ))}
          <Hbutton text="Add to medications" onPress={handleAddMed} />
        </View>
      </AppSheet>
    </>
  );
};

export default DashboardScreen;
