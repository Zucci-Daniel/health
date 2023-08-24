import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {AppText} from '../../reusables';
import {HreminderCardStyles} from './styles';

const HreminderCard = () => {
  return (
    <View style={HreminderCardStyles.container}>
      <View style={HreminderCardStyles.row}>
        <AppText text={'Lavoferm Andrienoge'} styles={Typo(pallete.dark).P3} />
        <AppText text={'3x'} styles={Typo(pallete.error).Button} />
      </View>
      <View style={HreminderCardStyles.row}>
        <AppText text={'3ml'} styles={Typo(pallete.error).P1} />
        <AppText text={'Evening'} styles={Typo(pallete.text).Button} />
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
