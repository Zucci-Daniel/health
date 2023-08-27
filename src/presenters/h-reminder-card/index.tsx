import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DeleteIcon, EditIcon} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {AppText} from '../../reusables';
import {HreminderCardStyles} from './styles';
import {HreminderCardType} from './type';

const HreminderCard = ({
  dosage = '5ml',
  frequency = '5 days',
  name = 'Fozila Mcce',
  onDelete,
  onUpdate,
  time = [{day: 'Evening', time: new Date()}],
}: HreminderCardType) => {
  const formatTimeArray = (): string => {
    const days = time.map(time => time.day);
    const periods = ['Morning', 'Afternoon', 'Evening'];
    const presentPeriods = periods.filter(period => days.includes(period));

    if (presentPeriods.length === 0) {
      return '';
    } else if (presentPeriods.length === 1) {
      return presentPeriods[0];
    } else {
      return presentPeriods.join('/');
    }
  };

  return (
    <TouchableOpacity onPress={onUpdate} style={HreminderCardStyles.container}>
      <View style={HreminderCardStyles.row}>
        <AppText text={name} styles={Typo(pallete.dark).h5} />
        <AppText
          text={`For ${frequency} days`}
          styles={Typo(pallete.error).Button}
        />
      </View>
      <View style={HreminderCardStyles.row}>
        <AppText
          text={`${dosage}pills/take`}
          styles={Typo(pallete.error).Caption}
        />
        <AppText text={formatTimeArray()} styles={Typo(pallete.text).Caption} />
      </View>
      <View style={HreminderCardStyles.buttonRow}>
        <TouchableOpacity onPress={onDelete} style={HreminderCardStyles.delete}>
          <DeleteIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HreminderCard;
