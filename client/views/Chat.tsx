import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native';



const Chat = ({  }) => {
    useEffect(() => {
        // Fetch the different messages
    }, [])

    return (
        <View style={ styles.mainView }>
            <View style={ styles.headerChat }>
                <Text style={ styles.userToTalk }>Marty</Text>
            </View>


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
})

export default Chat;