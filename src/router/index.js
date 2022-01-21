import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Splash,
  SignUp,
  ResetPassword,
  OTP,
  Home,
  Catalog,
  Detail,
  Description,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Detail">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
