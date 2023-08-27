import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';
import {Padding} from '../../configs/Constants';

export const HreminderCardStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: Padding,
    borderBottomWidth: 0.5,
    borderBottomColor: pallete.borderColor2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    paddingTop: Padding / 2,
  },
  button: {
    paddingHorizontal: Padding,
    paddingVertical: Padding / 2,
    borderRadius: Padding,
  },
  delete: {
    paddingVertical: Padding / 2,
    borderRadius: Padding,
  },
});
