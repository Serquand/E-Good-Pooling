import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import InputLogin from '../components/InputLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPPassword] = useState("");
    const [mode, setMode] = useState("");

    const test = (title: string) => {
        console.log(title)
    }

    return (
        <View style = {[ styles.mainView, styles.mainLogin, styles.mainFlex ]}>
            <View>
                <Image 
                    source = {require("../assets/Logo.png")} 
                    style = { styles.logoImage } 
                />
            </View>

            <View>
                <InputLogin 
                    stateChanger={test}
                    labelContent="Test"  
                    isPassword={ !false }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white", 
    },

    mainLogin: {
        paddingTop: 25, 
        paddingBottom: 25 
    },

    mainFlex: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
    },

    logoImage: {
        width: 100,
        height: 100
    }
});

export default Login;