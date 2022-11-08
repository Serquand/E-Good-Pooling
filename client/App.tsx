import React from 'react';
import { NavigationContainer as Nav } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './views/Login';
import Chat from './views/Chat';
import ListPeopleChat from './views/ListPeopleChat';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
    return (
        <Nav>   
            <Navigator initialRouteName='ListPeopleChat'>
                <Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Screen name='Chat' component={Chat} options={{ headerShown: false }} />
                <Screen name="ListPeopleChat" component={ListPeopleChat} options={{ headerShown: false }} />
            </Navigator>
        </Nav>
    );
}