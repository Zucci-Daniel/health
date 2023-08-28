import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DeleteIcon, EditIcon} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {convertToTime} from '../../helpers/general';
import {AppText} from '../../reusables';
import {HreminderCardStyles} from './styles';
import {HreminderCardType} from './type';

const HreminderCard = ({
  dosage = '5ml',
  frequency = 0,
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
        <AppText text={name} styles={Typo(pallete.para).h5} />
        <AppText
          text={`For ${frequency} day${frequency > 1 ? 's' : ''}`}
          styles={Typo(pallete.dark).Button}
        />
      </View>
      <View style={HreminderCardStyles.row}>
        <AppText
          text={`${dosage} pills per take`}
          styles={Typo(pallete.error, null, null, null, 'right').Button}
        />
      </View>
      <View style={HreminderCardStyles.reminders}>
        {time.map(({day, time}, index) => (
          <AppText
            key={index}
            text={`${day} at ${convertToTime(time)}`}
            styles={Typo(pallete.text).Caption}
          />
        ))}
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
