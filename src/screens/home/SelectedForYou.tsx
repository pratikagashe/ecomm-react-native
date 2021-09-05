import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Spacing} from 'styles';
import {SectionTitle} from 'components/atoms/Titles';
import SelectedProducts from '../../utils/selectedProducts';
import ProductSlider from 'components/atoms/ProductSlider';

const SelectedForYou = ({navigation}: any) => {
  return (
    <View style={{margin: Spacing.SCALE_18}}>
      <SectionTitle title="Selected just for you" btnText="Shop now" />
      <ProductSlider Products={SelectedProducts} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectedForYou;
