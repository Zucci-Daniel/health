import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';
import {Padding} from '../../configs/Constants';
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
  sheetContainer: {
    width: '100%',
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    gap: 16,
    paddingTop: 30,
    paddingBottom: 50,
  },
  periodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'space-between',
  },
  time: {
    height: 50,
    width: '100%',
    backgroundColor: 'red',
  },
  emptyContainer: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    paddingHorizontal: Padding,
    paddingTop: Padding / 2,
    backgroundColor: pallete.screen,
  },
});
