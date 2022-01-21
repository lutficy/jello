import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyPro1} from '../../../assets';

const NewProduct = ({image, nameshoes, price, type}) => {
  return (
    <View style={styles.wrapper(type)}>
      <Image source={image} style={styles.image(type)} />
      <View style={styles.title}>
        <Text style={styles.name}>{nameshoes}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default NewProduct;

const styles = StyleSheet.create({
  wrapper: type => ({
    width: type === 'secondary' ? 160 : 138,
    height: type === 'secondary' ? 178 : 167,
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 0.03,
    marginRight: 15,
  }),
  image: type =>  ({
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: type === 'secondary' ? 203 : 176,
    height: 100,
    marginLeft: -19
  }),
  title: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    color: '#7F7F7F',
    fontFamily: 'Roboto-Bold',
    paddingBottom: 7,
  },
  price: {
    color: '#FA6400',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});
