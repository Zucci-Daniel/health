import {useState} from 'react';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
import {storeItem} from '../../../helpers/localStorage';
import {routes} from '../../../routers/router-constants/routes';
import {SignupInputTypes} from './type';

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
    //-- WHEN LOGGING OUT, DON'T REMOVE THIS INFORMATION, ONLY REMOVE THE CURRENT USER.
    storeItem(payload.password, payload);

    navigation.navigate(routes.LOGIN);
  };

  const inputs: Array<SignupInputTypes> = [
    {
      label: 'Enter Name',
      value: name,
      onChangeText: (text: string) => setName(text),
      //..add more.
    },
    {
      label: 'Enter a Password',
      value: password,
      onChangeText: (text: string) => setPassword(text),
      //..add more.
    },
  ];

  return {
    name,
    setName,
    password,
    setPassword,
    handleSignup,
    shouldDisableButton,
    inputs,
  };
};
