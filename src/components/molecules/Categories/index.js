import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyCat1} from '../../../assets';

const Categories = ({image, price, onBack}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        {onBack && <Text style={styles.price}>{price}</Text>}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  wrapper: {
    height: 90,
    width: 119,
    backgroundColor: '#ECEEF0',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    height: 90,
    width: 90,
  },
  price: {
      fontSize: 14
  }
});
