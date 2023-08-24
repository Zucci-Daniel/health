import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {Stack} from '../router-constants';
import {routes} from '../router-constants/routes';

const DummyScreen = () => <View style={{flex: 1}} />;

export function NavigationProvider() {
  //-----

  function AuthNavigationProvider() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.SIGN_UP} component={DummyScreen} />
        <Stack.Screen name={routes.LOGIN} component={DummyScreen} />
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
        <Stack.Screen name={routes.LOGIN} component={DummyScreen} />
      </Stack.Navigator>
    );
  }
  //-----
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.AUTH} component={AuthNavigationProvider} />
        <Stack.Screen name={routes.APP} component={AppNavigationProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
