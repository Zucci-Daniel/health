import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getItem} from '../../helpers/localStorage';
import {STORAGE_CONSTANTS} from '../../helpers/storageConstants';
import {setCurrentUser} from '../../redux/global-store/storeSlice';
import {storeSliceType} from '../../redux/storeType';
import {Login, OnboardingScreen, Signup} from '../../screens/authentication';
import {Stack} from '../router-constants';
import {routes} from '../router-constants/routes';

const DummyScreen = () => <View style={{flex: 1}} />;

export function NavigationProvider() {
  const {user} = useSelector((state: storeSliceType) => state.storeReducer);
  const [isAppReady, setIsAppReady] = useState(false);
  const dispatch: any = useDispatch();

  const getCurrentUser = async () => {
    try {
      const response = await getItem(STORAGE_CONSTANTS.CURRENT_USER_INFO);

      if (response) {
        //
        dispatch(setCurrentUser(response));
      }
    } catch (error) {
    } finally {
      setIsAppReady(true);
    }
  };
  //-----
  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!isAppReady) return null;

  function AuthNavigationProvider() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={routes.SIGN_UP} component={Signup} />
        <Stack.Screen name={routes.LOGIN} component={Login} />
      </Stack.Navigator>
    );
  }
  function AppNavigationProvider() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.SIGN_UP} component={DummyScreen} />
      </Stack.Navigator>
    );
  }
  //-----
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!user && (
          <Stack.Screen name={routes.AUTH} component={AuthNavigationProvider} />
        )}
        {user && (
          <Stack.Screen name={routes.APP} component={AppNavigationProvider} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
