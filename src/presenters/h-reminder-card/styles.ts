import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';
import {Padding} from '../../configs/Constants';

export const HreminderCardStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: Padding,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    paddingTop: Padding / 2,
  },
  button: {
    backgroundColor: pallete.dark,
    paddingHorizontal: Padding,
    paddingVertical: Padding / 2,
    borderRadius: Padding,
  },
  delete: {
    backgroundColor: pallete.error,
    paddingHorizontal: Padding,
    paddingVertical: Padding / 2,
    borderRadius: Padding,
  },
});
