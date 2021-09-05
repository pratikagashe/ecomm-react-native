import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IProduct} from 'utils/interface';
import {ScrollView} from 'react-native-gesture-handler';
import ProductTile from './ProductTile';

interface Props {
  Products: Array<IProduct>;
  navigation: any;
}

const ProductSlider = ({Products, navigation}: Props) => {
  return (
    <View style={styles.flexContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: -10}}>
        {Products &&
          Products.length > 1 &&
          Products.map((product: IProduct, index: number) => (
            <View
              key={`productSlider${index}`}
              style={{
                width: 225,
                marginLeft: 10,
              }}>
              <ProductTile product={product} navigation={navigation} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default ProductSlider;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
