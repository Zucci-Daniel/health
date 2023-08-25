import {StyleSheet} from 'react-native';
import {palleteTypes} from '../../configs/Colors';
import {GlobalHeaderBorder, Globalpadding} from '../../configs/GlobalStyles';

export const HHeaderStyles = (colors: palleteTypes) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors?.screen,
      ...Globalpadding,
      ...GlobalHeaderBorder,
    },
    button: {
      borderWidth: 0,
      borderRadius: 24,
      paddingHorizontal: 30,
      paddingVertical: 6,
      backgroundColor: colors.dark,
    },
  });
