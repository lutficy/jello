import React from 'react';
import {ImageBackground, StyleSheet, Text, View, ScrollView} from 'react-native';
import {IconBack, ILBackground} from '../../assets';
import { Button, Input } from '../../components';

const SignUp = ({onPress, navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.firstpage}>
          <IconBack onPress={onPress} onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Create your account</Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Text style={styles.subtitle}>Do you already have account?</Text>
            <Text style={styles.sign} onPress={onPress} onPress={() => navigation.navigate('Login')}>Sign In</Text>
          </View>
        </View>
        <View style={styles.secondpage}>
          <Input title="Username"/>
          <Input title="E-mail"/>
          <Input title="Password"/>
          <Button title="Create account" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
      fontSize: 20,
      color: 'white',
      paddingTop: 30
  },
  subtitle: {
      fontSize: 14,
      color: 'white',
      paddingRight: 6
  },
  sign: {
    fontSize: 14,
    color: '#FFC33A'
  }
});
