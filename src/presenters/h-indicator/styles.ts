import {StyleSheet} from 'react-native';
import {pallete, palleteTypes} from '../../configs/Colors';

export const HIndicatorStyles = (colors: palleteTypes) =>
  StyleSheet.create({
    indicatorContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    indicator: {
      borderRadius: 5,
      backgroundColor: colors?.dark || pallete.dark,
      margin: 3,
    },
  });
