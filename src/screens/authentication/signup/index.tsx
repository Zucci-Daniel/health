import React from 'react';
import {View} from 'react-native';
// import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
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
        <View style={SignUpStyles.container}>
          <View>
            <AppText styles={Typo().h2} text={'Set up your profile'} />
            <AppText
              styles={Typo().P1}
              text={
                'Create an account to enhance your online shopping experience.'
              }
            />
          </View>
          <View style={SignUpStyles.inputWrapper}>
            {inputs.map(({label, isPassword}, index) => (
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

export default Signup;
