import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import InputLogin from '../components/InputLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mode, setMode] = useState("I");

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
                {/* If we aren't in sign in mode */}
                {mode != 'I' && <InputLogin 
                    stateChanger={setEmail}
                    labelContent="Email"  
                    isPassword={ false }
                />}

                <InputLogin 
                    stateChanger={setUsername}
                    labelContent="Pseudo"  
                    isPassword={ false }
                />

                {/* If we aren't in reset password mode */}
                {mode != 'R' && <InputLogin 
                    stateChanger={setPassword}
                    labelContent="Mot de passe"  
                    isPassword={ true }
                />}

                {/* If we are in sign up mode */}
                {mode == 'U' && <InputLogin 
                    stateChanger={setConfirmPassword}
                    labelContent="Confirmer"
                    isPassword={ true }
                />}
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