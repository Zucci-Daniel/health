import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';
import {Padding, screenHeight} from '../../configs/Constants';
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
    height: 0,
  },
  sheetContainer: {
    width: '100%',
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    gap: 16,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: pallete.screen,
    height: screenHeight - 50,
  },
  sheetWrapper: {
    flex: 1,
    gap: 16,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight / 2,
  },
  name: {
    paddingHorizontal: Padding,
    paddingTop: Padding / 2,
    backgroundColor: pallete.screen,
  },
  deleteIcon: {
    padding: Padding,
    backgroundColor: pallete.dark,
    position: 'absolute',
    bottom: 50,
    right: 10,
    borderRadius: 200,
  },
});
