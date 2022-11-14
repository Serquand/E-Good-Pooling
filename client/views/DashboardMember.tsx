import React from 'react'
import { View, StyleSheet } from 'react-native';
import ProfilCard from '../components/DashboardMember/ProfilCard';
import ProfilNav from '../components/DashboardMember/ProfilNav';

const DashboardMember = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <View style={ styles.container }>
            <ProfilCard username="Serquand" />
            <View style={{ marginTop: 30 }}>
                <ProfilNav 
                    writtenText="Notification"
                    borderColor="#008ecb"
                     
                    navigationRoute = "Login"
                    navigation = { navigation }
                />  
                <ProfilNav 
                    writtenText="Paramètres"
                    borderColor="#1D497C"
                     
                    navigationRoute = "Login"
                    navigation = { navigation }
                />  
                <ProfilNav 
                    writtenText="Historique"
                    borderColor="#14803a"
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

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0, 
        backgroundColor: "white", 
        paddingTop: 25
    }
}); 

export default DashboardMember;
