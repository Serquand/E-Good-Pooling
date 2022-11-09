import React from 'react'
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

type PeopleProps = {
    nickname: string;
    lastMessage: string;
    lastHour: string;
    noSeenMessage: boolean;
    navigation: any;
    haveAPP: boolean;
}

const People = (peopleProps: PeopleProps) => {
    const { nickname, lastMessage, lastHour, noSeenMessage, haveAPP, navigation } = peopleProps;

    const goPrecisedChat = () => navigation.navigate('Chat', { user: nickname })

    return (
        <Pressable 
            style={ styles.container }
            onPress={() => goPrecisedChat()}
        >
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.newMessageContainer, (noSeenMessage ? { backgroundColor: "transparent" } : { backgroundColor: "#008ecb" }) ]}></View>
                {(haveAPP) ? 
                    <Image 
                        style={ styles.logoUser }
                        source={ require("../../assets/Logo.png") } 
                    /> :
                    <View style={[styles.logoUser, styles.logoUserInitial]}>
                        <Text style={ styles.logoUserText }>
                            { nickname.charAt(0).toUpperCase() }
                        </Text>
                    </View>
                }
            </View>
            
            <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
                    <Text style={styles.nickname }>{ nickname }</Text>
                    <Text>{ lastHour }</Text>
                </View>

                <View>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        { lastMessage }
                    </Text>
                </View>   
            </View>
        </Pressable>
    )
}

const styles =  StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",  
        borderBottomColor: "#333", 
        borderBottomWidth: 1, 
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 5, 
        flex: 1
    }, 

    newMessageContainer: {
        height: 10, 
        width: 10, 
        borderRadius: 10
    },

    lastMessage: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap", 
        overflow: "hidden",
    }, 
    
    nickname: {
        fontWeight: "600",
    }, 
    
    logoUser: {
        marginLeft: 10,
        marginRight: 10,  
        width: 40, 
        height: 40,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    logoUserInitial: {
        backgroundColor: "#1d497c",  
    },

    logoUserText: {
        backgroundColor: "#1d497c", 
        color: "white", 
    },
})

export default People;