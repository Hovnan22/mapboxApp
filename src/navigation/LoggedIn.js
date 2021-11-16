import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens';
import { LOGIN_IN_SCREEN } from './screens';

const Stack = createStackNavigator();

const LoggedIn = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name={LOGIN_IN_SCREEN} component={Login} />
    </Stack.Navigator>
)

export default LoggedIn;
