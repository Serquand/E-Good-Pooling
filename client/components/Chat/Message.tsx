import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Message = {
    weSend: boolean;
    message: string;
    sender: string;
}

const Message = (props: Message) => {
    const { weSend, message, sender } = props;

    return (
        <View style={[ styles.talkBubble, (weSend ? styles.rotate : null) ]}>
            <View style={[ styles.messageContainer, (!weSend ? styles.weSend : styles.otherSend), (weSend ? styles.rotate : null ) ]}>
                <Text style={ styles.senderText }>{ sender }</Text>
                <Text style={{ color: "white" }}>
                    { message }
                </Text>
            </View>
            <View style={[ styles.talkBubbleSide, (!weSend ? styles.weSendSide : styles.otherSendSide) ] }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    talkBubble: {
        marginVertical: 3,
        backgroundColor: 'transparent', 
        marginHorizontal: 30, 
    }, 

    rotate: {
        transform: [{ rotate: '180deg' }]
    },

    weSend: {
        backgroundColor: '#1d497c', 
    },

    otherSend: {
        backgroundColor: '#008ecb',
    },

    weSendSide: {
        borderRightColor: '#1d497c',
        bottom: 7,
    },

    otherSendSide: {
        borderRightColor: '#008ecb',
        top: 7,
    },

    messageContainer: {
        padding: 8,
        borderRadius: 10
    }, 

    talkBubbleSide: {
        position: 'absolute',
        left: -15,  
        width: 0, 
        height: 0,
        borderTopColor: 'transparent', 
        borderTopWidth: 6,
        borderBottomWidth: 6, 
        borderRightWidth: 15, 
        borderBottomColor: 'transparent'
    }, 

    senderText: { 
        color: "white", 
        fontStyle: 'italic', 
        fontWeight: "600", 
        textDecorationLine: 'underline', 
        marginBottom: 5 
    }
});

export default Message;