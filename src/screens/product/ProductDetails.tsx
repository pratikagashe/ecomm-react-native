import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SubHeading} from 'components/atoms/Titles';
import {Spacing, Typography, Colors} from 'styles';

const DetailsList = [
  'Fusce euismod ipsum ut libero sollicitudin convallis.',
  'Sed convallis tortor vel ipsum condimentum eleifend sed at est.',
  'Mauris et enim ultrices, fringilla felis eget, congue elit.',
  'Suspendisse condimentum augue et iaculis sollicitudin.',
  'Donec dignissim lorem non mauris dapibus pulvinar.',
];

const ProductDetails = () => {
  const RenderList = () => {
    return (
      <>
        {DetailsList &&
          DetailsList.length > 0 &&
          DetailsList.map((item: any, index: any) => (
            <View style={styles.flexContainer} key={`productDetails${index}`}>
              <View style={styles.bulletPoint} />
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
      </>
    );
  };

  return (
    <View style={styles.productInfoContainer}>
      <SubHeading title="Product Details" />
      <RenderList />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  productInfoContainer: {
    paddingTop: Spacing.SCALE_18,
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 15,
    lineHeight: 20,
    flex: 1,
    marginBottom: Spacing.SCALE_8,
  },
  bulletPoint: {
    width: Spacing.SCALE_8,
    height: Spacing.SCALE_8,
    borderRadius: Spacing.SCALE_8,
    backgroundColor: Colors.PRIMARY,
    marginTop: 8,
    marginRight: Spacing.SCALE_12,
  },
});
