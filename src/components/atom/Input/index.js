import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({title}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    page: {
        paddingBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 10,
        padding: 15,
        fontSize: 15,
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: '#808080',
        paddingBottom: 10
    }
})
