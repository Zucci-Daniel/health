import {StyleSheet} from 'react-native';
import {GlobalScreen} from '../../configs/GlobalStyles';

export const DashboardScreenStyles = StyleSheet.create({
  container: {
    ...GlobalScreen,
    gap: 15,
  },
  inputWrapper: {
    gap: 20,
  },
  removePadding: {paddingBottom: 0},
  separator: {
    height: 10,
  },
});
