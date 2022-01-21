import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {IconBackBlack} from '../../assets';
import {Gap} from '../../components';

const Description = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <IconBackBlack />
        <Gap width={15} />
        <Text style={styles.title}>Description</Text>
      </View>
      <Text style={{lineHeight: 30, paddingTop: 30}}>
        The history of fashion design refers specifically to the development of
        the purpose and intention behind garments, shoes and accessories, and
        their design and construction. The modern industry, based around firms
        or fashion houses run by individual designers, started in the 19th
        century with Charles Frederick Worth who, beginning in 1858, was the
        first designer to have his label sewn into the garments he created
        Before the mid-19th century the division between haute couture and
        ready-to-wear did not really exist. All but the most basic pieces of
        female clothing were made-to-measure by dressmakers and seamstresses
        dealing directly with the client. Most often, clothing was patterned,
        sewn and tailored in the household.
      </Text>
    </View>
  );
};

export default Description;

const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: WindowWidth * 0.06,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: WindowHeight * 0.07,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Roboto-SemiBold',
  },
});
