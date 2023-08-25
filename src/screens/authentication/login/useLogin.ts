import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
import {logThis} from '../../../helpers';
import {getItem, storeItem} from '../../../helpers/localStorage';
import {STORAGE_CONSTANTS} from '../../../helpers/storageConstants';
import {useSilentToast} from '../../../presenters/h-toast';
import {setCurrentUser} from '../../../redux/global-store/storeSlice';

export const useLogin = (navigation: NavigationType) => {
  const showToast = useSilentToast();
  const dispatch: any = useDispatch();

  const [password, setPassword] = useState('');

  const shouldDisableButton = () => {
    if (password.trim() == '') return true;
    else return false;
  };

  const handleLogin = async () => {
    /*
  use password to find user in db
  if no user, throw password error. and show alert
   */

    const userInfo = await getItem(password);

    logThis('user info==> ', userInfo);

    if (userInfo) {
      //change the app state, and unmount the auth state.
      // navigation.navigate(routes.LOGIN);
      logThis(userInfo, ' user info');
      dispatch(setCurrentUser(JSON.parse(userInfo)));
      storeItem(STORAGE_CONSTANTS.CURRENT_USER_INFO, userInfo);
    } else {
      //show a toast.
      showToast('error', "User Don't exist, Please check password again!");
    }
  };

  return {
    password,
    setPassword,
    handleLogin,
    shouldDisableButton,
  };
};
