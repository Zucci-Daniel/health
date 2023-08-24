import {LogBox} from 'react-native';

/*
WHATEVER YOU WANT TO IGNORE, ADD IT HERE.

*/
export const useIgnore = () => {
  LogBox.ignoreLogs(['redux-persist failed to create sync storage']);
};
