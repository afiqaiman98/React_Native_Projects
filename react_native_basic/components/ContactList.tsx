import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'Yesh',
            status:'Hiatusa',
        },
        {
            uid:2,
            name:'Yesh',
            status:'Voice',
        },
        {
            uid:3,
            name:'Yesh',
            status:'Boxisg',
        }
    ]
  return (
    <View>
        <Text>Conact List</Text>
        <ScrollView>
            {contacts.map(({uid,name,status}) => (
                <View key={uid} >
                    <Text>
                        {name}
                    </Text>
                    <Text>
                        {status}
                    </Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})