import React from 'react';
import {View} from 'react-native';
import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton, Hinput} from '../../../presenters';
import {AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {LoginStyles} from './styles';
import {LoginTypes} from './type';

const Login = ({navigation}: LoginTypes) => {
  const inputs = [
    {
      label: 'Enter First Name',
      //..add more.
    },
    {
      label: 'Last Name',
      //..add more.
    },
  ];
  return (
    <>
      {/* <JRheader onPressLeftAction={() => navigation.navigate(routes.LOGIN)} /> */}
      <Hscreen>
        <View style={LoginStyles.container}>
          <View>
            <AppText styles={Typo().h2} text={'Login'} />
            <AppText
              styles={Typo().P1}
              text={
                'Create an account to enhance your online shopping experience.'
              }
            />
          </View>
          <View style={LoginStyles.inputWrapper}>
            {inputs.map(({label}, index) => (
              <Hinput key={index} placeHolder={label} />
            ))}
          </View>
          <Hbutton
            disabled={false}
            text="Continue"
            // onPress={() => navigation.navigate(routes.ADD_PHOTO)}
          />
        </View>
      </Hscreen>
    </>
  );
};

export default Login;
