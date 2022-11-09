import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PeopleComponent from '../components/ListPeopleChat/People';


type People = {
    nickname: string;
    lastMessage: string;
    lastHour: string;
    haveAPP: boolean;
    noSeenMessage: boolean;
}

const datas: Array<People> = [
    {
        noSeenMessage: false, 
        haveAPP: false,        
        lastHour: "24/11",
        nickname: "Lucario", 
        lastMessage: "Luca ! Luca", 
    },
    {
        noSeenMessage: true, 
        haveAPP: false,
        lastHour: "17:24", 
        nickname: "Raichu", 
        lastMessage: "Raiiiiiiiiiiiiiiiiiiiiiiiichhhhhhhhhhhhhuuuuuuuuuuuuuuuuuuuuu !",
    },
]

const ListPeopleChat = ({ navigation }: any, { routes }: any) => {
    const [people, setPeople] = useState(Array<People>)

    useEffect(() => {
        setPeople(datas)
    }, [])

    return (
        <ScrollView style={ styles.mainView }>
            {people.map((person: People, index: number) => (
                <PeopleComponent 
                    key = { index }
                    noSeenMessage = { person.noSeenMessage }
                    lastHour = { person.lastHour }
                    nickname = { person.nickname }
                    haveAPP = { person.haveAPP }
                    lastMessage = { person.lastMessage }
                    navigation = { navigation }
                />
            ))}
        </ScrollView>
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
})

export default ListPeopleChat;