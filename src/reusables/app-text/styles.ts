import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';

export const AppTextStyles = (color?: string) =>
  StyleSheet.create({
    text: {
      color: color || pallete.text,
    },
  });
