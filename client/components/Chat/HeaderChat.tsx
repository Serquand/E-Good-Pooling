import React from "react";
import { View, StyleSheet, Text } from 'react-native';

const HeaderChat = () => {
    return (
        <View style={ styles.headerChat }>
            <Text style={ styles.userToTalk }>Marty</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerChat: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#14803a", 
        paddingVertical: 10
    }, 

    userToTalk: {
        color: "#fff",
        fontWeight: "800" 
    }
});

export default HeaderChat;
