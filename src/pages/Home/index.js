import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DummyCat1,
  IconCart,
  IconSearch,
  ILBackground,
  DummyCat2,
  DummyCat3,
  DummyPro1,
  DummyPro2,
  DummyPro3
} from '../../assets';
import {Categories, Gap, InfoSlider, NewProduct} from '../../components';
import Search from '../../components/atom/Search';

const Home = ({onPress, navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.firstpage}>
          <View style={styles.search}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 290,
                height: 40,
                backgroundColor: '#3382D1',
                borderRadius: 10,
                padding: 20,
              }}>
              <IconSearch />
              <TextInput
                placeholder="Cari barang kamu disini"
                style={{width: 230}}
              />
            </View>
            <IconCart />
          </View>
          <View style={{paddingTop: 20}}>
            <InfoSlider />
          </View>
        </View>
        <ScrollView style={styles.secondpage}>
          <View style={styles.category}>
            <Text style={styles.title}>CATEGORIES</Text>
            <TouchableOpacity>
              <Text style={styles.subtitle}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}>
            <View style={styles.itemcat}>
              <Categories image={DummyCat1} />
              <Categories image={DummyCat2} />
              <Categories image={DummyCat3} />
            </View>
          </ScrollView>
          <Gap height={20} />
          <View style={styles.itemcat2}>
            <View style={styles.category}>
              <Text style={styles.title}>NEW PRODUCT</Text>
              <TouchableOpacity onPress={onPress} onPress={() => navigation.navigate('Catalog')}>
                <Text style={styles.subtitle}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.itemcat}>
                <NewProduct image={DummyPro1} nameshoes="NMD_R1 SHOES" price="1,500,000"/>
                <NewProduct image={DummyPro2} nameshoes="NMD_R1 SHOES" price="2,700,000"/>
                <NewProduct image={DummyPro1} nameshoes="NMD_R1 SHOES" price="1,800,000"/>
              </View>
            </ScrollView>
          </View>
          <Gap height={20} />
          <View style={styles.itemcat2}>
            <View style={styles.category}>
              <Text style={styles.title}>DISCOUNT</Text>
              <TouchableOpacity>
                <Text style={styles.subtitle}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.itemcat}>
                <NewProduct image={DummyPro1} nameshoes="NMD_R1 SHOES" price="1,500,000" />
                <NewProduct image={DummyPro2} nameshoes="NMD_R1 SHOES" price="2,700,000"/>
                <NewProduct image={DummyPro1} nameshoes="NMD_R1 SHOES" price="1,800,000"/>
              </View>
            </ScrollView>
          </View>
          <Gap height={60} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  firstpage: {
    padding: 30,
  },
  secondpage: {
    backgroundColor: 'white',
    height: 470,
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemcat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
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
  itemcat2: {
    // backgroundColor: 'red',
  },
});
