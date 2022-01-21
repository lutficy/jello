import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { useEffect } from 'react'
import { ILBackground } from '../../assets';
import { NavigationContainer } from '@react-navigation/native';

const Splash = ({navigation}) => {
  useEffect (() => {
    setTimeout (() => {
      navigation.replace('Login')
    }, 300)
  }, [])
  return (
    <ImageBackground source={ILBackground} style={styles.background}>
      <View style={styles.logo}>
        <Text style={styles.title}>Jello.</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 60, 
        width: 140,
        backgroundColor: '#FFC100',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    title: {
        fontSize: 32,
        fontFamily: 'Roboto-Bold',
        color: '#0E4FAA'
    }
});
