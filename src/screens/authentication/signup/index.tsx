import React from 'react';
import {View} from 'react-native';
import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton, Hinput} from '../../../presenters';
import {AppText} from '../../../reusables';
import {SignUpStyles} from './styles';
import {SignupInputTypes, SignUpTypes} from './type';
import {useSignUp} from './useSignup';

const Signup = ({navigation}: SignUpTypes) => {
  const {
    name,
    password,
    setName,
    setPassword,
    handleSignup,
    shouldDisableButton,
  } = useSignUp(navigation);

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
            {inputs.map(({label, value, onChangeText}, index) => (
              <Hinput
                onChangeText={onChangeText}
                value={value}
                key={index}
                placeHolder={label}
              />
            ))}
          </View>
          <Hbutton
            disabled={shouldDisableButton()}
            text="Continue"
            onPress={handleSignup}
          />
        </View>
      </Hscreen>
    </>
  );
};

export default Signup;
