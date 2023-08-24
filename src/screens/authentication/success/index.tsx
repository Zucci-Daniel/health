import React from 'react';
import {View} from 'react-native';
import {Typo} from '../../../configs/Typography';
import {Hscreen} from '../../../containers';
import {Hbutton} from '../../../presenters';
import {AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {AddPhotoStyles} from './styles';
import {SuccessTypes} from './type';

const Success = ({navigation}: SuccessTypes) => {
  return (
    <Hscreen>
      <View style={AddPhotoStyles.container}>
        <AppText
          styles={Typo(null, null, null, null, 'center').h2}
          text="Successful!"
        />
        <AppText
          styles={Typo(null, null, null, null, 'center').P1}
          text="We are delighted to have you on board our app; enjoy your time shopping."
        />

        <Hbutton
          onPress={() => navigation.navigate(routes.LOGIN)}
          text="Start Shopping"
        />
      </View>
    </Hscreen>
  );
};

export default Success;
