import React from 'react';
import {View} from 'react-native';
import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton, Hinput} from '../../../presenters';
import {AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {SignUpStyles} from './styles';
import {SignupInputTypes, SignUpTypes} from './type';

const Signup = ({navigation}: SignUpTypes) => {
  const inputs: Array<SignupInputTypes> = [
    {
      label: 'Enter Name',
      value: '',
      //..add more.
    },
  ];
  return (
    <>
      <Hscreen>
        <View style={SignUpStyles.container}>
          <View style={GlobalFormHeaders}>
            <AppText styles={Typo().h2} text={'Sign up'} />
            <AppText
              styles={Typo().P1}
              text={`Just your name, and we're good to go!🤓`}
            />
          </View>
          <View style={SignUpStyles.inputWrapper}>
            {inputs.map(({label, value}, index) => (
              <Hinput value={value} key={index} placeHolder={label} />
            ))}
          </View>
          <Hbutton
            disabled={false}
            text="Continue"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </View>
      </Hscreen>
    </>
  );
};

export default Signup;
