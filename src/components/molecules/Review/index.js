import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconStar } from '../../../assets'

const Review = () => {
    return (
        <View style={styles.star}>
            <IconStar />
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    star: {
        flexDirection: 'row'
    }
})
