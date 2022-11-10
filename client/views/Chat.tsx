import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import HeaderChat from '../components/Chat/HeaderChat';
import Messages from '../components/Chat/Messages';


const Chat = ({ navigation, routes }: any) => {
    return (
        <View style={ styles.mainView }>
            <HeaderChat 
                nickname = "Lucario"
                noSeenMessage = { 5 }
                haveAPP = { false }
                navigation = { navigation }
            />
            <Messages />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        position: "absolute", 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0, 
        backgroundColor: "#fff"
    }, 
})

export default Chat;