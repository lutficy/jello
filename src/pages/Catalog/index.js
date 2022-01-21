import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyPro1, DummyPro2, DummyPro3, DummyPro4, DummyPro5, IconFilter, IconKatalog} from '../../assets';
import {Gap, HeaderSeacrh, NewProduct} from '../../components';

const Catalog = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderSeacrh onPress={() => navigation.goBack('')} />
      <ScrollView vertical contentContainerStyle={styles.container}>
        <View style={styles.catalog}>
          <Text style={styles.title}>NEW PRODUCT</Text>
          <View style={styles.icon}>
            <IconFilter />
            <Gap width={13} />
            <IconKatalog />
          </View>
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingTop: 15,
            alignItems: 'center',
            marginLeft: -5
          }}>
          <NewProduct
            image={DummyPro1}
            nameshoes="ULTRABOOST 20 SHOES NMD_R1"
            price="1,500,000"
            type="secondary"
          />
          <NewProduct
            image={DummyPro2}
            nameshoes="NMD_R1 SHOES"
            price="1,500,000"
            type="secondary"
          />
          <NewProduct
            image={DummyPro1}
            nameshoes="NMD_R1 SHOES"
            price="1,500,000"
            type="secondary"
          />
          <NewProduct
            image={DummyPro2}
            nameshoes="NMD_R1 SHOES"
            price="1,500,000"
            type="secondary"
          />
          <NewProduct
            image={DummyPro2}
            nameshoes="NMD_R1 SHOES"
            price="1,500,000"
            type="secondary"
          />
          <NewProduct
            image={DummyPro1}
            nameshoes="NMD_R1 SHOES"
            price="1,500,000"
            type="secondary"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 50
  },
  catalog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#808080',
  },
});
