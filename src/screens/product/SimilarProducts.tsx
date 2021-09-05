import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Spacing} from 'styles';
import {SectionTitle} from 'components/atoms/Titles';
import SelectedProducts from '../../utils/selectedProducts';
import ProductSlider from 'components/atoms/ProductSlider';

const SimilarProducts = ({navigation}: any) => {
  return (
    <View style={{marginTop: Spacing.SCALE_18}}>
      <SectionTitle title="You May Also Like" btnText="Shop now" />
      <ProductSlider Products={SelectedProducts} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SimilarProducts;
