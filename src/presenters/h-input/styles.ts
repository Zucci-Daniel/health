import {StyleSheet} from 'react-native';
import {palleteTypes} from '../../configs/Colors';
import {Padding} from '../../configs/Constants';

export const HinputStyles = (
  colors: palleteTypes,
  isFocused?: boolean,
  isJustInput?: boolean,
) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 28,
      borderColor: isFocused ? colors?.light : 'transparent',
      borderWidth: 0.5,
      backgroundColor: isFocused ? 'transparent' : colors.light,
      paddingHorizontal: isJustInput ? Padding : 0,
    },
    input: {
      flex: 1,
      backgroundColor: 'transparent',
      paddingHorizontal: 15,
      color: 'black',
    },
    icon: {
      padding: 10,
      paddingHorizontal: 15,
    },
  });
