import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {AppText} from '../../reusables';
import {MedicationTime} from '../../screens/dashboard/type';
import {HreminderCardStyles} from './styles';
import {HreminderCardType} from './type';

const HreminderCard = ({
  dosage = '5ml',
  frequency = '5 days',
  name = 'Fozila Mcce',
  time = [{day: 'Evening', time: new Date()}],
}: HreminderCardType) => {
  const formatTimeArray = (): string => {
    const days = time.map(time => time.day);
    const hasMorning = days.includes('Morning');
    const hasEvening = days.includes('Evening');

    if (hasMorning && hasEvening) {
      return 'Morning/Evening';
    } else if (hasMorning) {
      return 'Morning';
    } else if (hasEvening) {
      return 'Evening';
    } else {
      return '';
    }
  };

  return (
    <View style={HreminderCardStyles.container}>
      <View style={HreminderCardStyles.row}>
        <AppText text={name} styles={Typo(pallete.dark).P3} />
        <AppText text={frequency} styles={Typo(pallete.error).Button} />
      </View>
      <View style={HreminderCardStyles.row}>
        <AppText text={dosage} styles={Typo(pallete.error).P1} />
        <AppText text={formatTimeArray()} styles={Typo(pallete.text).Button} />
      </View>
      <View style={HreminderCardStyles.buttonRow}>
        <TouchableOpacity style={HreminderCardStyles.delete}>
          <AppText text={'Delete Med'} styles={Typo(pallete.light).Button2} />
        </TouchableOpacity>
        <TouchableOpacity style={HreminderCardStyles.button}>
          <AppText text={'Update Med'} styles={Typo(pallete.light).Button2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HreminderCard;
