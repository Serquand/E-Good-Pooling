import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PeopleComponent from '../components/ListPeopleChat/People';


type People = {
    nickname: string;
    lastMessage: string;
    lastHour: string;
    lastSender: string;
    noSeenMessage: boolean;
}

const datas: Array<People> = [
    {
        noSeenMessage: false, 
        lastHour: "24/11",
        nickname: "Lucario", 
        lastMessage: "Luca ! Luca", 
        lastSender: "Serquand"
    },
    {
        noSeenMessage: true, 
        lastHour: "17:24", 
        nickname: "Raichu", 
        lastMessage: "Raiiiiiiiiiiiiiiiiiiiiiiiichhhhhhhhhhhhhuuuuuuuuuuuuuuuuuuuuu !",
        lastSender: "Serquand"
    },
]

const ListPeopleChat = ({ navigation }: any, { routes }: any) => {
    const [people, setPeople] = useState(Array<People>)

    useEffect(() => {
        setPeople(datas)
    }, [])

    return (
        <ScrollView>
            {people.map((person: People, index: number) => (
                <PeopleComponent 
                    key = { index }
                    noSeenMessage = { person.noSeenMessage }
                    lastHour = { person.lastHour }
                    nickname = { person.nickname }
                    lastSender = { person.lastSender }
                    lastMessage = { person.lastMessage }
                    navigation = { navigation }
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
})

export default ListPeopleChat;