import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Map } from '../screens';
import { MAP_SCREEN } from './screens';

const Stack = createStackNavigator();

const Root = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name={MAP_SCREEN} component={Map} />
    </Stack.Navigator>
)

export default Root;
