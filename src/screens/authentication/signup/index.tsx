import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {GlobalFormHeaders} from '../../../configs/GlobalStyles';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton, Hinput} from '../../../presenters';
import {AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {SignUpStyles} from './styles';
import {SignUpTypes} from './type';
import {useSignUp} from './useSignup';

const Signup = ({navigation}: SignUpTypes) => {
  const {handleSignup, shouldDisableButton, inputs} = useSignUp(navigation);

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
          <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
            <AppText
              styles={[
                Typo(null, null, null, null, 'center').P3,
                {textDecorationLine: 'underline'},
              ]}
              text={`Login`}
            />
          </TouchableOpacity>
        </View>
      </Hscreen>
    </>
  );
};

export default Signup;
