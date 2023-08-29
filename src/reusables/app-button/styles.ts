import {StyleSheet} from 'react-native';
import {palleteTypes} from '../../configs/Colors';
import {buttonTypes} from './type';

export const AppButtonStyles = (
  type: buttonTypes,
  colors: palleteTypes,
  isCentered?: boolean,
  disabled?: boolean,
) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 40,
      width: '100%',
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 28,
      backgroundColor: type == 'normal' ? colors?.dark : 'transparent',
      opacity: disabled ? 0.5 : 1,
      alignSelf: isCentered ? 'center' : 'flex-start',
      borderWidth: type == 'normal' ? 0 : 1,
      borderColor: type == 'normal' ? 'transparent' : colors?.dark,
    },
  });
