import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import {Spacing, Typography} from 'styles';
import {SectionTitle} from 'components/atoms/Titles';
import {womenCategories} from 'utils/categories';

const SubCategoriesScreen = ({route, navigation}: any) => {
  const {categoryName, subCategories} = route.params;

  const renderItem = (item: any) => {
    return (
      <View
        style={{
          width: '33%',
          padding: 4,
          marginBottom: 18,
        }}
        key={`categories${item.id}`}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <SectionTitle title={categoryName} />
          <FlatList
            data={subCategories}
            style={styles.gridContainer}
            renderItem={({item}) => renderItem(item)}
            numColumns={3}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.SCALE_18,
  },
  gridContainer: {
    marginLeft: -4,
  },
  image: {
    marginBottom: 8,
    width: '100%',
    height: 150,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textAlign: 'center',
    letterSpacing: 0.25,
  },
});
