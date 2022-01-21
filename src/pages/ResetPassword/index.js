import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IconBack, ILBackground} from '../../assets';
import { Button, Input } from '../../components';

const ResetPassword = ({navigation, onPress}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.firstpage}>
          <IconBack onPress={onPress} onPress={() => navigation.goBack()}/>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter your email addreess and we will send you link to reset
            password
          </Text>
        </View>
        <View style={styles.secondpage}>
          <Input title="E-mail" />
          <Button title="Reset password"/>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  firstpage: {
    padding: 30,
  },
  secondpage: {
    backgroundColor: 'white',
    height: 464,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
  },
  title: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 30
  },
  subtitle: {
      fontSize: 14,
      color: 'white',
      fontWeight: '400',
      maxWidth: 285,
      paddingTop: 10
  }
});
