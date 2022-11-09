import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Message = {
    weSend: boolean;
    message: string;
}

const Message = (props: Message) => {
    const { weSend, message } = props;

    return (
        <View style={ styles.talkBubble }>
            <View style={ styles.messageContainer }></View>
            <View style={ styles.talkBubbleSide }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    talkBubble: {
        backgroundColor: 'transparent', 
        marginHorizontal: 30
    }, 

    messageContainer: {
        width: 120, 
        height: 80, 
        backgroundColor: 'red', 
        borderRadius: 10
    }, 

    talkBubbleSide: {
        position: 'absolute',
        left: -26, 
        top: 26, 
        width: 0, 
        height: 0,
        borderTopColor: 'transparent', 
        borderTopWidth: 13,
        borderBottomWidth: 13, 
        borderRightWidth: 26,
        borderRightColor: "red", 
        borderBottomColor: 'transparent'
    }    
});

export default Message;