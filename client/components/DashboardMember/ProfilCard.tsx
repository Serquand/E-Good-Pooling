import React, { useState, useEffect } from "react";
import { View, Pressable, TextInput, Text, StyleSheet, Image } from "react-native";

type userInformation = {
    username: string;
    haveAPP: boolean;
    email: string;
    numberTrip: number;
    lastName: string;
    firstName: string;
}

const fakeInformation: userInformation = {
    username: "Serquand", 
    haveAPP: false,
    email: "esteban.vincent@efrei.net", 
    numberTrip: 512, 
    lastName: "VINCENT", 
    firstName: "Esteban"
}

const ProfilCard = (props: { username: string }) => {
    const [user, setUser] = useState({} as userInformation);

    useEffect(() => setUser(fakeInformation), [])

    return (
        <View style={ styles.container }>
            <View style={ styles.changePPContainer }>
                {(user.haveAPP) ? 
                    <Image 
                        style={ styles.logoUser }
                        source={ require("../../assets/Logo.png") } 
                    /> :
                    <View style={[styles.logoUser, styles.logoUserInitial]}>
                        <Text style={ styles.logoUserText }>
                            { user.username?.charAt(0).toUpperCase() }
                        </Text>
                    </View>
                }
                <Pressable>
                    <Text style={ styles.changePPText }>Changer</Text>
                </Pressable>
            </View>

            <View style={ styles.changeInfoContainer }>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoUser: {
        marginLeft: 10,
        marginRight: 10,  
        width: 55, 
        height: 55,
        borderRadius: 28,
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
        fontSize: 25, 
        fontWeight: "500"
    },

    changePPContainer: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "center"
    }, 

    changePPText: {
        color: "#1d497c",
        fontWeight: "500",
        textDecorationLine: "underline", 
        marginTop: 10
    },

    container: {
        display: "flex",
        flexDirection: "row", 
        alignItems: "center"
    }, 

    changeInfoContainer: {

    }
})

export default ProfilCard;