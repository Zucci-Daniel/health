import React, {FunctionComponent} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {Typo} from '../../../configs/Typography';
import {Hbutton, Hindicator} from '../../../presenters';
import {AppImage, AppText} from '../../../reusables';
import {routes} from '../../../routers/router-constants/routes';
import {onboardingStyles} from './styles';
import {onBoardDataProps, OnboardingTypes} from './type';
import {useOnboarding} from './useOnboarding';

const OnBoardView: FunctionComponent<{
  data: onBoardDataProps[];
  onStart?: () => void;
}> = ({data, onStart}) => {
  return (
    <>
      {data.map((obData: any, index: any) => (
        <View key={index} style={onboardingStyles().scrollContainer}>
          <View style={onboardingStyles().imageContainer}>
            <AppImage
              islocal={false}
              uri="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg"
            />
          </View>
          <View style={onboardingStyles().captions}>
            <AppText
              text={obData.title}
              styles={[index == data.length - 1 ? Typo().h1 : Typo().h2]}
            />
            <AppText
              text={obData.subTitle}
              styles={[Typo().P1, onboardingStyles().paddingTitle]}
            />
          </View>
          {index == data.length - 1 && (
            <View style={onboardingStyles().buttonWrapper}>
              <Hbutton onPress={onStart} text={'Start'} />
            </View>
          )}
        </View>
      ))}
    </>
  );
};

const OnboardingScreen = ({navigation}: OnboardingTypes) => {
  const {
    hidePreviousButton,
    scrollX,
    scrollRef,
    uptSelectedIndex,
    handleNext,
    handlePrevious,
    onBoardingData,
    selectedIndex,
    colors,
  } = useOnboarding(navigation);

  return (
    // <Hscreen hasPadding={false}>
    <View style={onboardingStyles().container}>
      {selectedIndex !== onBoardingData.length - 1 && (
        <TouchableOpacity style={onboardingStyles().skip}>
          <AppText text="Skip" styles={Typo(colors?.text).Button2} />
        </TouchableOpacity>
      )}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        ref={scrollRef}
        onMomentumScrollEnd={uptSelectedIndex}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}>
        <OnBoardView
          data={onBoardingData}
          onStart={() =>
            navigation.navigate(routes.AUTH, {screen: routes.SIGN_UP})
          }
        />
      </Animated.ScrollView>
    </View>
    // </Hscreen>
  );
};

export default OnboardingScreen;
