import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import InputLogin from '../components/InputLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mode, setMode] = useState("I");

    const handleLogin = () => {
        console.log(mode, username, password, confirmPassword, email);
    }

    return (
        <View style = {[ styles.mainView, styles.mainLogin, styles.mainFlex ]}>
            <View>
                <Image 
                    source = {require("../assets/Logo.png")} 
                    style = { styles.logoImage } 
                />
            </View>

            <View style = {[ styles.mainFlex, styles.mainView, styles.flexCenter ]}>
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

                <Pressable 
                    onPress={() => handleLogin()}
                    style={ styles.loginButton }
                >
                    <Text style={{ color: "#fff", }}>{ mode == "U" ? "Inscription" : mode == 'I' ? "Connexion" : "Reset password" }</Text>
                </Pressable>
            </View>

            <View style={styles.bottomLogin}>
                <Text style={styles.toggleMode}>{ mode !== "U" ? "Pas de compte ?" : "Déjà un compte ?" }</Text>

                <Pressable onPress={() => setMode((mode == "U" ? "I" : "U"))}>
                    <Text style={[ styles.toggleMode, { color: "#14803a" }]}>
                        { mode !== "U" ? "Inscrivez-vous ici !" : "Connectez-vous ici !" }
                    </Text>
                </Pressable>    
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
        zIndex: -1
    },

    flexCenter: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ translateY: -35 }]
    },

    bottomLogin: {    
        alignItems: "center",
        position: "absolute",
        bottom: 35,
    },

    logoImage: {
        width: 100,
        height: 100
    }, 

    loginButton: {
        paddingHorizontal: 35, 
        paddingVertical: 10,
        borderRadius: 10, 
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#14803a', 
    }, 

    toggleMode: {
        fontSize: 15
    }
});

export default Login;