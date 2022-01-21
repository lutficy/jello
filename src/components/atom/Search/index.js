import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconCart, IconSearch} from '../../../assets';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconSearch />
        <TextInput
          placeholder="Cari barang Kamu disini"
        //   style={{backgroundColor: 'yellow'}}
        />
      </View>
      <View>
        <IconCart />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    height: 40,
    width: 290,
    backgroundColor: '#3382D1',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
