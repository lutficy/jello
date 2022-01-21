import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IconBack,
  IconBackBlack,
  IconSearch,
  IconSearchBlack,
} from '../../../assets';

const HeaderSearch = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <IconBackBlack />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <TextInput placeholder="Cari barang kamu disini" style={styles.input} />
        <IconSearchBlack />
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 65,
    borderBottomWidth: 1,
    borderColor: '#979797',
  },
  wrapper: {
    width: 300,
    height: 45,
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  input: {
    height: 45,
  },
});
