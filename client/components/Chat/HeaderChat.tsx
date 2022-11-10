import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

type HeaderChatProps = {
    nickname: string;
    noSeenMessage: number;
    haveAPP: boolean;
    navigation: any;
}

const HeaderChat = (props: HeaderChatProps) => {
    const { nickname, noSeenMessage, haveAPP, navigation } = props;

    return (
        <View style={ styles.headerChat }>
            <Pressable 
                onPress={() => navigation.navigate("ListPeopleChat") }
                style={ styles.goBackPressable }
            >
                <Image 
                    style={ styles.leftArrow }
                    source={ require("../../assets/LeftArrow.png") }
                />
                {noSeenMessage != 0 && (
                    <View style={ styles.noSeenMessageContainer }>
                        <Text style={{ fontSize: 12, color: "white" }}>{ noSeenMessage }</Text>
                    </View>
                )}
            </Pressable>
            
            <View style={ styles.identity }>
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
                <Text style = { styles.identityUser }>{ nickname }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerChat: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "flex-start",
        height: 85,
        borderBottomColor: "#555", 
        borderBottomWidth: 1, 
        position: "relative", 
        marginBottom: 20,
    }, 

    leftArrow: {
        width: 20, 
        height: 20,
        marginLeft: 10,
    },

    userToTalk: {
        color: "#fff",
        fontWeight: "800" 
    }, 

    identity: {
        margin: "auto",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        gap: 5, 
        position: "absolute",
        top: 0, 
        bottom: 0, 
        left: 0,
        right: 0,
        zIndex: -5
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

    noSeenMessageContainer: { 
        width: 36, 
        height: 36, 
        borderRadius: 18, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#1d497c" 
    },

    logoUserInitial: {
        backgroundColor: "#1d497c",  
    },

    logoUserText: {
        backgroundColor: "#1d497c", 
        color: "white", 
    },

    identityUser: {
        fontSize: 16, 
    }, 

    goBackPressable: { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        gap: 5,         
    },
});

export default HeaderChat;
