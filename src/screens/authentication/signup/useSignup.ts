import {useState} from 'react';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
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
