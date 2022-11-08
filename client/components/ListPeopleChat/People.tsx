import React from 'react'
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

type PeopleProps = {
    nickname: string;
    lastMessage: string;
    lastHour: string;
    lastSender: string;
    noSeenMessage: boolean;
    navigation: any;
}

const People = (peopleProps: PeopleProps) => {
    const { nickname, lastMessage, lastHour, noSeenMessage, navigation } = peopleProps;

    const goPrecisedChat = () => navigation.navigate('Chat', { user: nickname })

    return (
        <Pressable 
            style={ styles.container }
            onPress={() => goPrecisedChat()}
        >
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={[styles.newMessageContainer, (noSeenMessage ? { backgroundColor: "#fff" } : { backgroundColor: "#008ecb" }) ]}></View>
                <Image source={ require("../../assets/Logo.png") } />
            </View>
            
            <View>
                
            </View>
        </Pressable>
    )
}

const styles =  StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: 'center'
    }, 

    newMessageContainer: {
        height: 10, 
        width: 10, 
        borderRadius: 10
    }
})

export default People;