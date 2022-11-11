import React from 'react';
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';

type InputProfilProps = {
    information: string;
    handler: any;
}

const InputProfil = (props: InputProfilProps) => {
    const { information, handler } = props;
    
    return (
        <View>
            <TextInput />
            <Pressable>
                <Text>X</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: "#555", 
        borderBottomWidth: 1, 
    }
});

export default InputProfil;