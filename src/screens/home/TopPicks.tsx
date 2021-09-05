import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Spacing} from 'styles';
import {SectionTitle} from 'components/atoms/Titles';
import ProductTile from 'components/atoms/ProductTile';
import SelectedProducts from '../../utils/selectedProducts';

const TopPicks = ({navigation}: any) => {
  const renderItem = (item: any) => {
    return (
      <View
        style={{
          width: '50%',
          margin: 2,
          marginBottom: 18,
        }}>
        <ProductTile product={item} navigation={navigation} />
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <SectionTitle title="Top Picks" btnText="Shop now" />
      }
      style={styles.gridContainer}
      data={SelectedProducts}
      renderItem={({item}) => renderItem(item)}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: Spacing.SCALE_18,
  },
});

export default TopPicks;
