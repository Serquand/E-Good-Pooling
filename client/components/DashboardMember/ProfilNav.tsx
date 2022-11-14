import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native'; 

type ProfilNavProps = {
    writtenText: string;
    borderColor: string;
    navigationRoute: string;
    navigation: any;
};

const ProfilNav = (props: ProfilNavProps) => {
    const { writtenText, borderColor, navigationRoute, navigation } = props;

    return (
        <Pressable
            style={[ styles.container, { borderColor } ]}
            onPress={() => navigation.navigate(navigationRoute) }
        >
            <Text>{ writtenText }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        borderRadius: 15, 
        paddingHorizontal: 20, 
        paddingVertical: 5, 
        flexDirection: "row",
        width: '80%', 
        margin: 'auto'
    }
});

export default ProfilNav;