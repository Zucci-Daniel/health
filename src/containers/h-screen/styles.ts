import {StyleSheet} from 'react-native';
import {palleteTypes} from '../../configs/Colors';

export const HScreenStyles = (colors: palleteTypes, hasPadding: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors?.screen || 'red',
      paddingHorizontal: hasPadding ? 16 : 0,
    },
  });
