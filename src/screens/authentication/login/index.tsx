import React from 'react';
import {View} from 'react-native';
import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton, Hinput} from '../../../presenters';
import {AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {SignupInputTypes} from '../signup/type';
import {LoginStyles} from './styles';
import {LoginTypes} from './type';

const Login = ({navigation}: LoginTypes) => {
  const inputs: Array<SignupInputTypes> = [
    {
      label: 'Enter Name',
      value: '',
      //..add more.
    },
    {
      label: 'Enter Name',
      value: '',
      //..add more.
    },
  ];
  return (
    <>
      {/* <JRheader onPressLeftAction={() => navigation.navigate(routes.LOGIN)} /> */}
      <Hscreen>
        <View style={LoginStyles.container}>
          <View style={GlobalFormHeaders}>
            <AppText styles={Typo().h2} text={'Login'} />
            <AppText
              styles={Typo().P1}
              text={
                'Create an account to enhance your online shopping experience.'
              }
            />
          </View>
          <View style={LoginStyles.inputWrapper}>
            {inputs.map(({label, value}, index) => (
              <Hinput value={value} key={index} placeHolder={label} />
            ))}
          </View>
          <Hbutton
            disabled={false}
            text="Continue"
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          />
        </View>
      </Hscreen>
    </>
  );
};

export default Login;
