import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBack, ILBackground} from '../../assets';
import {Button, Gap, Input, Sign} from '../../components';

const Login = ({onPress, navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <ImageBackground source={ILBackground} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.firtspage}>
            <Text style={styles.title}>Welcome to Login</Text>
            <Gap height={10} />
            <Text style={styles.subtitle}>
              Please fill E-mail & password to login your
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 3}}>
              <Text style={styles.subtitle}>app account.</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={onPress} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{paddingLeft: 5, color: '#FFC33A'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secondpage}>
            <Input title="E-mail" />
            <Input title="Password" secureTextEntry />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.checkbox}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={styles.remember}>Remember me</Text>
              </View>
              <Text
                style={styles.password}
                onPress={onPress}
                onPress={() => navigation.navigate('ResetPassword')}>
                Forgot password?
              </Text>
            </View>
            <View style={styles.button}>
              <Button title="Login Now" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 45,
              }}>
              <Sign title="Sign Up" type="secondary" logo="G" />
              <Sign title="Sign Up" logo="F" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  firtspage: {
    padding: 30,
  },
  secondpage: {
    backgroundColor: 'white',
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    maxWidth: 267,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 30,
  },
  remember: {
    fontSize: 13,
    color: '#616161',
    fontWeight: '900',
  },
  password: {
    fontSize: 13,
    color: '#4D5BB6',
    fontWeight: '900',
  },
});
