import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Dummy1} from '../../../assets';
import {Button} from '../../atom';

const InfoSlider = () => {
  return (
    <ImageBackground source={Dummy1} style={styles.dummy}>
      <View style={{}}>
        <Text style={{color: 'white', paddingLeft: 30, fontSize: 14}}>
          Hoodie Collection
        </Text>
        <Text
          style={{
            maxWidth: 200,
            color: 'white',
            paddingLeft: 30,
            fontSize: 10,
          }}>
          Latest shoe recommendations which is being hit right now
        </Text>
      </View>
      <View style={{width: 57, marginLeft: 30, marginTop: 15}}>
        <Button type="secondary"  title="Get Now"/>
      </View>
    </ImageBackground>
  );
}

export default InfoSlider;

const styles = StyleSheet.create({
  dummy: {
    height: 125,
    width: 370,
    alignSelf: 'center',
    padding: 20,
  },
});
