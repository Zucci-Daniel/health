import {useState} from 'react';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
import {logThis} from '../../../helpers';
import {getItem} from '../../../helpers/localStorage';

export const useLogin = (navigation: NavigationType) => {
  const [password, setPassword] = useState('');

  const shouldDisableButton = () => {
    if (password.trim() == '') return true;
    else return false;
  };

  const handleLogin = async () => {
    /*
  use password to find user in db
  if no user, throw password error.
   */

    const userInfo = await getItem(password);

    logThis('user info==> ', userInfo);

    if (userInfo) {
      //navigate to app
      // navigation.navigate(routes.LOGIN);
    } else {
      //show a toast.
    }
  };

  return {
    password,
    setPassword,
    handleLogin,
    shouldDisableButton,
  };
};
