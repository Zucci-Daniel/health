import React from 'react';
import {View} from 'react-native';
import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton, Hinput} from '../../../presenters';
import {AppText} from '../../../reusables';
import {SignupInputTypes} from '../signup/type';
import {LoginStyles} from './styles';
import {LoginTypes} from './type';
import {useLogin} from './useLogin';

const Login = ({navigation}: LoginTypes) => {
  const {handleLogin, password, setPassword, shouldDisableButton} =
    useLogin(navigation);
  const inputs: Array<SignupInputTypes> = [
    {
      label: 'Enter your Password',
      value: password,
      onChangeText: (text: string) => setPassword(text),
      //..add more.
    },
  ];
  return (
    <>
      <Hscreen>
        <View style={LoginStyles.container}>
          <View style={GlobalFormHeaders}>
            <AppText styles={Typo().h2} text={'Login'} />
          </View>
          <View style={LoginStyles.inputWrapper}>
            {inputs.map(({label, value, onChangeText}, index) => (
              <Hinput
                value={value}
                key={index}
                onChangeText={onChangeText}
                placeHolder={label}
              />
            ))}
          </View>
          <Hbutton
            disabled={shouldDisableButton()}
            text="Continue"
            onPress={handleLogin}
          />
        </View>
      </Hscreen>
    </>
  );
};

export default Login;
