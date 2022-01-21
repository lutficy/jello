import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconNext} from '../../../assets';

const Description = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.9} onPress={onPress}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 25,
        }}>
        <Text style={styles.desc}>Description Components</Text>
        <IconNext />
      </View>
    </TouchableOpacity>
  );
};

export default Description;

const styles = StyleSheet.create({
  wrapper: {
    height: 54,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  desc: {
      fontSize: 14,
      fontFamily: 'Roboto-Light',
      textAlign: 'center'
  }
});
