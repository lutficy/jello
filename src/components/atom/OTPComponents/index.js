import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const OTPComponents = () => {
    return (
        <View >
            <TextInput style={styles.wrapper} />
        </View>
    )
}

export default OTPComponents

const styles = StyleSheet.create({
    wrapper: {
        width: 63,
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#DCDCDC',
        textAlign: 'center'
    }
})
