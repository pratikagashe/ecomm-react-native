import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Typography, Colors, Spacing} from 'styles';
import {formatPrice} from 'utils/common';
import {SubHeading} from 'components/atoms/Titles';
import {TouchableRipple} from 'react-native-paper';
import {Sizes, ColourCodes} from 'utils/constants';
import {IProductInfo, IProduct} from 'utils/interface';

const ProductInfo = ({
  product,
  productCartInfo,
  setProductCartInfo,
}: IProductInfo) => {
  const {
    id,
    discount,
    discountPrice,
    price,
    name,
    gender,
    image,
  }: IProduct = product;

  const AvailableSizes = () => {
    return (
      <>
        {Sizes &&
          Sizes.length > 0 &&
          Sizes.map((item, index) => {
            let SizeStyle;
            let TextStyle;
            if (productCartInfo.size === item.size) {
              SizeStyle = [styles.sizeBox, styles.activeSize];
              TextStyle = [styles.text, styles.activeText];
            } else {
              SizeStyle = styles.sizeBox;
              TextStyle = styles.text;
            }

            return (
              <TouchableRipple
                onPress={() => {
                  setProductCartInfo({
                    ...productCartInfo,
                    size: item.size,
                  });
                }}
                key={`size${index}`}
                style={{
                  marginRight: Spacing.SCALE_8,
                }}
                disabled={productCartInfo.size === item.size}>
                <View style={SizeStyle}>
                  <Text style={TextStyle}>{item.size}</Text>
                </View>
              </TouchableRipple>
            );
          })}
      </>
    );
  };

  const AvailableColors = () => {
    return (
      <>
        {ColourCodes &&
          ColourCodes.length > 0 &&
          ColourCodes.map((item, index) => {
            let ColorStyle;
            if (productCartInfo.color.code === item.code) {
              ColorStyle = [styles.colorBox, styles.activeColor];
            } else {
              ColorStyle = styles.colorBox;
            }

            return (
              <TouchableRipple
                onPress={() => {
                  setProductCartInfo({
                    ...productCartInfo,
                    color: item,
                  });
                }}
                key={`size${index}`}
                style={{
                  marginRight: Spacing.SCALE_8,
                }}
                disabled={productCartInfo.color.code === item.code}>
                <View style={ColorStyle}>
                  <View
                    style={{
                      backgroundColor: item.color,
                      width: 20,
                      height: 20,
                      borderRadius: 16,
                      borderColor: Colors.GRAY_LIGHT,
                      borderWidth: 1,
                    }}
                  />
                </View>
              </TouchableRipple>
            );
          })}
      </>
    );
  };

  return (
    <>
      <View style={[styles.flexContainer, styles.productInfoContainer]}>
        <View style={styles.productName}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.discount}>{discount}% off</Text>
          <Text style={styles.price}>{formatPrice(price)}</Text>
          <Text style={styles.discountPrice}>{formatPrice(discountPrice)}</Text>
        </View>
      </View>
      <View style={{paddingTop: Spacing.SCALE_18}}>
        <SubHeading title="Available Sizes" />
        <View style={[styles.flexContainer, styles.sizes]}>
          <AvailableSizes />
        </View>
      </View>
      <View style={{paddingTop: Spacing.SCALE_18}}>
        <SubHeading title="Available Colors" />
        <View style={[styles.flexContainer, styles.colors]}>
          <AvailableColors />
        </View>
      </View>
    </>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productInfoContainer: {
    paddingTop: Spacing.SCALE_18,
  },
  productName: {
    flex: 1,
  },
  priceInfo: {
    paddingLeft: Spacing.SCALE_12,
  },
  name: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 16,
    lineHeight: 20,
  },
  price: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textDecorationLine: 'line-through',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'right',
  },
  discountPrice: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'right',
  },
  discount: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.PRIMARY,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
  },
  sizes: {
    justifyContent: 'flex-start',
  },
  sizeBox: {
    width: 48,
    paddingTop: 4,
    height: 32,
    borderRadius: 4,
    borderColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activeSize: {
    backgroundColor: Colors.PRIMARY,
  },
  activeText: {
    color: Colors.WHITE,
  },
  colors: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  colorBox: {
    borderColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeColor: {
    borderColor: Colors.PRIMARY,
  },
});
