import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {NurseSvg} from '../../../assets/svg';
import {GlobalScreenTypes} from '../../../configs/GlobalScreenTypes';
import {Typo} from '../../../configs/Typography';
import {Hbutton} from '../../../presenters';
import {AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {onboardingStyles} from './styles';

const OnBoardView: FunctionComponent<{
  onStart?: () => void;
}> = ({onStart}) => {
  return (
    <>
      <View style={onboardingStyles().wrapper}>
        <View style={onboardingStyles().svgContainer}>
          <NurseSvg width={300} height={300} />
        </View>
        <View style={onboardingStyles().caption}>
          <AppText text={'Your Health is your Wealth!'} styles={[Typo().h1]} />
          <AppText
            text={`Take it seriously or it won't take you seriously!`}
            styles={[Typo().P1]}
          />
          <View>
            <Hbutton onPress={onStart} text={'Start'} />
          </View>
        </View>
      </View>
    </>
  );
};

const OnboardingScreen = ({navigation}: GlobalScreenTypes) => {
  return (
    <View style={onboardingStyles().container}>
      <OnBoardView
        onStart={() =>
          navigation.navigate(routes.AUTH, {screen: routes.SIGN_UP})
        }
      />
    </View>
  );
};

export default OnboardingScreen;
