import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {IconBack, ILBackground} from '../../assets';
import {Button, OTPComponents} from '../../components';

const OTP = () => {
  return (
    <ImageBackground source={ILBackground} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.firstpage}>
          <IconBack />
          <Text style={styles.title}>Enter the code</Text>
          <Text style={styles.subtitle}>
            Enter the code , we send to your phone please check and fill it.
          </Text>
        </View>
        <View style={styles.secondpage}>
          <View style={styles.otpcomp}>
            <OTPComponents />
            <OTPComponents />
            <OTPComponents />
            <OTPComponents />
          </View>
          <View style={styles.resend}>
            <Text style={{fontSize: 14}}>I didnt receive the code</Text>
            <TouchableOpacity activeOpacity={0.9}>
              <Text style={{fontSize: 14, color: '#B620E0', paddingTop: 10}}>
                RESEND CODE
              </Text>
            </TouchableOpacity>
          </View>
          <Button title="Keep going" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OTP;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    paddingTop: 10,
    maxWidth: 300,
  },
  otpcomp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  resend: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 130,
  },
});
