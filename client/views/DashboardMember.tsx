import React from 'react'
import { View } from 'react-native';
import ProfilNav from '../components/DashboardMember/ProfilNav';

const DashboardMember = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <View>
            <ProfilNav 
                writtenText="Hello World"
                borderColor="#1025BC" 
                navigationRoute = "Login"
                navigation = { navigation }
            />  
        </View>
    )
}

export default DashboardMember;
