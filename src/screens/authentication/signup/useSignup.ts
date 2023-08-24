import {useState} from 'react';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
import {storeItem} from '../../../helpers/localStorage';
import {STORAGE_CONSTANTS} from '../../../helpers/storageConstants';
import {routes} from '../../../routers/router-constants/routes';

export const useSignUp = (navigation: NavigationType) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const shouldDisableButton = () => {
    if (name.trim() == '' || password.trim() == '') return true;
    else return false;
  };

  const handleSignup = () => {
    const payload = {
      name,
      password,
    };
    //--- for simplicity, i'll store the password in a list of password in my local storage
    // to mimick a really basic flow, i'll just add it to my list of passwords in my local storage.
    storeItem(STORAGE_CONSTANTS.STORE_USER_INFO, payload);
    navigation.navigate(routes.LOGIN);
  };

  return {
    name,
    setName,
    password,
    setPassword,
    handleSignup,
    shouldDisableButton,
  };
};
