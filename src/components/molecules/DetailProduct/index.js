import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  IconBackBlack,
  IconShare,
  IconHeart,
  DummyDetail,
} from '../../../assets';

const DetailProduct = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={{padding: 20}}>
          <IconBackBlack />
        </View>
        <ImageBackground
          source={DummyDetail}
          style={{
            height: 202,
            width: 202,
            alignItems: 'flex-end',
            paddingTop: 20,
          }}>
          <IconHeart />
        </ImageBackground>
        <View style={{paddingTop: 20, paddingRight: 20}}>
          <IconShare />
        </View>
      </View>
      <View style={styles.icon}></View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  wrapper: {
    height: 202,
    width: 350,
    backgroundColor: '#ECEEF0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 20,
    borderRadius: 20
  },
});
