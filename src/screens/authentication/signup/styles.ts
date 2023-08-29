import {StyleSheet} from 'react-native';
import {GlobalScreen} from '../../../configs/GlobalStyles';

export const SignUpStyles = StyleSheet.create({
  container: {
    ...GlobalScreen,
    gap: 10,
  },
  agreement: {
    height: undefined,
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  agreementTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 8,
  },
  inputWrapper: {
    justifyContent: 'space-evenly',
    gap: 20,
  },
});
