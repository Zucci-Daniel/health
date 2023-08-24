import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
import {logThis} from '../../../helpers';
import {getItem} from '../../../helpers/localStorage';
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
      dispatch(setCurrentUser(userInfo));
    } else {
      //show a toast.
      showToast('error', "can't find you");
    }
  };

  return {
    password,
    setPassword,
    handleLogin,
    shouldDisableButton,
  };
};
