import React from 'react'
import { View } from 'react-native';
import ProfilCard from '../components/DashboardMember/ProfilCard';
import ProfilNav from '../components/DashboardMember/ProfilNav';

const DashboardMember = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <View>
            <ProfilCard username="Serquand" />
            <View>
                <ProfilNav 
                    writtenText="Notification"
                    borderColor="#1D497C" 
                    navigationRoute = "Login"
                    navigation = { navigation }
                />  
                <ProfilNav 
                    writtenText="Paramètres"
                    borderColor="#B9D464" 
                    navigationRoute = "Login"
                    navigation = { navigation }
                />  
                <ProfilNav 
                    writtenText="Historique"
                    borderColor="#1D497C" 
                    navigationRoute = "Login"
                    navigation = { navigation }
                />  
                <ProfilNav 
                    writtenText="Help"
                    borderColor="grey" 
                    navigationRoute = "Login"
                    navigation = { navigation }
                />  
            </View>
        </View>
    )
}

export default DashboardMember;
