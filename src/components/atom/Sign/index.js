import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sign = ({title, type, logo}) => {
    return (
        <View style={styles.wripper(type)}>
            <View style={styles.wrapperlogo}>
                <Text style={{fontWeight: '900'}}>{logo}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Sign

const styles = StyleSheet.create({
    wripper: type => ({
        height: 54,
        width: 160,
        backgroundColor: type === 'secondary' ? '#E9421E' : '#3D66B8',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }),
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
        paddingLeft: 15
    },
    wrapperlogo: {
        height: 22,
        width: 22,
        borderRadius: 22,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
