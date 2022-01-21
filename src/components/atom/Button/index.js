import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, type}) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={styles.wrapper(type)}>
        <Text style={styles.title(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: type => ({
    height: type === 'secondary' ? 20 : 55,
    backgroundColor: '#FFC33A',
    borderRadius: type === 'secondary' ? 5 : 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  title: type => ({
    fontSize: type === 'secondary' ? 9 : 16,
    fontWeight: '500',
    color: '#414B5A',
  }),
});
