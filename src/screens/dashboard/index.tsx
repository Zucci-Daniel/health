import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Typo} from '../../configs/Typography';
import {HflatScreen} from '../../containers';
import {Hbutton, Hheader, Hinput, HreminderCard} from '../../presenters';
import {AppSheet, AppText} from '../../reusables';
import {DashboardScreenStyles} from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import {pallete} from '../../configs/Colors';
import DatePicker from 'react-native-date-picker';
import {convertToTime} from '../../helpers/general';
import {MedicationReminder} from './type';
import {usePeriod} from './usePeriod';
import {useDashboard} from './useDashboard';

// @reason: creating this component here because it's only used in this component alone.
const Period = ({
  day = 'Afternoon',
  getTime = (day: string, time: any) => ({day, time}),
}: {
  day: string;
  getTime?: (day: string, time: any) => void;
}) => {
  const {time, showTime, setTime, setShowTime} = usePeriod(getTime, day);

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

const DashboardScreen = ({}: GlobalScreenTypes) => {
  const {
    addMedSheetRef,
    openSheet,
    newMed,
    setNewMed,
    medications,
    inputs,
    handleAddMed,
    handleDeleteMedication,
    updateMedication,
    finalUpdate,
    closeUpdateSheet,
    isUpdating,
  } = useDashboard();

  const renderCards = (item: MedicationReminder, _: number) => {
    return (
      <HreminderCard
        dosage={item.dosage}
        frequency={item.frequency}
        name={item.name}
        time={item.time}
        onDelete={() => handleDeleteMedication(item.id)}
        onUpdate={() => updateMedication(item)}
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
        ListEmptyComponent={() => (
          <View style={DashboardScreenStyles.emptyContainer}>
            <AppText
              styles={Typo(pallete.dark, null, null, null, 'center').h4}
              text={`No medication set yet! click the "Add Med" to start`}
            />
          </View>
        )}
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
          <Hbutton
            text={isUpdating ? 'Update this medication' : 'Add to medications'}
            onPress={isUpdating ? finalUpdate : handleAddMed}
          />
        </View>
      </AppSheet>
    </>
  );
};

export default DashboardScreen;
