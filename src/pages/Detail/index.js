import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {DummyDetail, DummyPro1, DummyPro2, DummyPro3, IconBackBlack, IconHeart, IconShare} from '../../assets';
import {Description, DetailProduct, Gap, Review, NewProduct} from '../../components';

const Detail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={{alignItems: 'center'}}>
        <DetailProduct />
      </View>
      <View style={{paddingTop: 25}}>
        <Text style={styles.title}>ULTRABOOST 20 SHOES NMD_R1</Text>
      </View>
      <View style={styles.review}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Gap width={13} />
        <Text style={styles.seereview}>SEE REVIEW</Text>
      </View>
      <Gap height={21} />
      <Text style={styles.price}>1,500,000</Text>
      <View style={{paddingTop: 30}}>
        <Description onPress={() => navigation.navigate('Description')} />
      </View>
      <Gap height={30} />
      <View style={styles.itemcat2}>
        <View style={styles.category}>
          <Text style={styles.title}>DISCOUNT</Text>
          <TouchableOpacity>
            <Text style={styles.subtitle}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.itemcat}>
            <NewProduct
              image={DummyPro1}
              nameshoes="NMD_R1 SHOES"
              price="1,500,000"
            />
            <NewProduct
              image={DummyPro2}
              nameshoes="NMD_R1 SHOES"
              price="2,700,000"
            />
            <NewProduct
              image={DummyPro2}
              nameshoes="NMD_R1 SHOES"
              price="1,800,000"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: '#808080',
    fontFamily: 'Roboto-Light',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  seereview: {
    color: '#B620E0',
    fontSize: 14,
    fontFamily: 'Roboto-Light',
  },
  price: {
    color: '#FA6400',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Roboto-Regular'
  },
  subtitle: {
    fontSize: 12,
    color: '#B620E0',
  },
  itemcat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
});
