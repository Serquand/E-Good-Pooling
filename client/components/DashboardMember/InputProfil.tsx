import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';

type InputProfilProps = {
    information: string | number;
    usernameModifier: boolean;
}

const InputProfil = (props: InputProfilProps) => {
    const { information, usernameModifier } = props;    
    const [username, setUsername] = useState(information);

    const updateUsername = () => {
        console.log("We are going to update the username for " + username);
    }

    return (
        <View style={ styles.container }>
            {(usernameModifier) ? 
                <TextInput 
                    value = { information?.toString() } 
                    onBlur = {() => updateUsername()}
                    onChangeText = {setUsername}
                /> : 
                <Text>{ information }</Text>}
            {(usernameModifier) && (
                <Pressable>
                    <Text>X</Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: "#555", 
        borderBottomWidth: 1, 
    }
});

export default InputProfil;