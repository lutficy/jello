import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyPro1} from '../../../assets';

const NewProductCat = ({image, nameshoes, price}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.name}>{nameshoes}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default NewProductCat;

const styles = StyleSheet.create({
  wrapper: {
    width: 138,
    height: 167,
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 0.03,
    marginRight: 15,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 175,
    height: 100,
    marginLeft: -19
  },
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
