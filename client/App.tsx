import React from 'react';
import Login from './views/Login';
import { NavigationContainer as Nav } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
    return (
        <Nav>   
            <Navigator initialRouteName='Login'>
                <Screen name='Login' component={Login} options={{ headerShown: false }} />
            </Navigator>
        </Nav>
    );
}