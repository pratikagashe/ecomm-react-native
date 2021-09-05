import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import ImageCarousel from './ImageCarousel';
import {Colors, Spacing} from 'styles';
import ProductInfo from './ProductInfo';
import {useIsFocused} from '@react-navigation/native';
import ProductDetails from './ProductDetails';
import Reviews from './Reviews';
import SimilarProducts from './SimilarProducts';
import AddToCart from 'components/atoms/AddToCart';
import {IProductCartInfo} from 'utils/interface';
import {initialProductCartInfo} from 'utils/constants';

const ProductScreen = ({route, navigation}: any) => {
  const [load, setLoad] = useState(false);
  const [productCartInfo, setProductCartInfo] = useState<IProductCartInfo>(
    initialProductCartInfo,
  );
  const isFocused = useIsFocused();
  const {product} = route.params;

  useEffect(() => {
    let inEffect = true;
    if (inEffect) {
      setLoad(false);
      setTimeout(() => {
        setLoad(true);
        setProductCartInfo(initialProductCartInfo);
      }, 100);
    }
    return () => {
      setLoad(false);
      inEffect = false;
    };
  }, [product]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {isFocused && load && product && (
          <View style={styles.container}>
            <ImageCarousel product={product} />
            <ProductInfo
              product={product}
              productCartInfo={productCartInfo}
              setProductCartInfo={setProductCartInfo}
            />
            <ProductDetails />
            <Reviews />
            <SimilarProducts navigation={navigation} />
          </View>
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomWrapper}>
          <AddToCart
            product={product}
            navigation={navigation}
            productCartInfo={productCartInfo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    padding: Spacing.SCALE_18,
  },
  bottomContainer: {
    backgroundColor: Colors.WHITE,
  },
  bottomWrapper: {
    backgroundColor: Colors.WHITE,
    padding: 12,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: -3,
    },
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 20,
    paddingHorizontal: Spacing.SCALE_18,
    paddingVertical: Spacing.SCALE_18,
  },
});
