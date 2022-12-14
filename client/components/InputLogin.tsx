import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type LoginInformation = {
    labelContent: string; 
    isPassword: boolean;
    stateChanger: any
}

const InputLogin = (loginInformation: LoginInformation) => {
    const { labelContent, isPassword, stateChanger } = loginInformation
    const [hidden, setHidden] = useState(isPassword);

    return (
        <View>
            <View style = { styles.topInputLogin }>
                <Text style={ styles.label }>{ labelContent }</Text>
                {isPassword && (
                    <Pressable onPress={ () => setHidden(!hidden) }>
                        <Text style={styles.showOptions}>Show</Text>
                    </Pressable>
                )}
            </View>
            <TextInput 
                onChangeText = { stateChanger } 
                secureTextEntry = { hidden }
                style = { styles.textInput }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#14803a',
    }, 
    topInputLogin: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    textInput: {
        borderWidth: 1,
        borderColor: '#14803a',
    }, 
    showOptions: {
        letterSpacing: 1, 
        fontSize: 14,
        color: '#14803a',
    }
});

export default InputLogin;