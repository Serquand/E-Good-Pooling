import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Message from './Message';

type MessageProperty = {
    weSend: boolean;
    text: string;
};

const chatMessages: Array<MessageProperty> = [
    {
        weSend: true,
        text: 'Send a message',
    }, 
    {
        weSend: false,
        text: 'Hello, World!',
    }, 
    {
        weSend: false,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero facere neque quos, aspernatur amet. Quas atque, nesciunt ratione alias, aperiam facere repellendus incidunt consectetur eos similique iure, nostrum sapiente?",
    }
];

const Messages = () => {
    const [messages, setMessages] = useState<MessageProperty[]>([]);
    useEffect(() => {
        // Fetch the different messages
        setMessages(chatMessages);
    }, [])

    return (
        <ScrollView>
            {messages.map((message: MessageProperty, index: number) => 
                <Message 
                    key = { index }
                    weSend = { message.weSend }
                    message = { message.text }
                />
            )}
        </ScrollView>
    )
}
 
export default Messages;