import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import {Spacing, Typography} from 'styles';
import {SectionTitle} from 'components/atoms/Titles';
import {womenCategories, menCategories} from '../../utils/categories';
import {TouchableRipple} from 'react-native-paper';

const CategorieScreen = ({navigation}: any) => {
  const renderItem = (item: any) => {
    return (
      <View
        style={{
          width: '33%',
          padding: 4,
          marginBottom: 18,
        }}
        key={`categories${item.id}`}>
        <TouchableRipple
          onPress={() =>
            navigation.navigate('TabCategories', {
              screen: 'SubCategoriesScreen',
              params: {
                categoryName: item.name,
                subCategories: item.subCategories,
              },
            })
          }>
          <>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </>
        </TouchableRipple>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <SectionTitle title="Women" />
          <FlatList
            data={womenCategories}
            style={styles.gridContainer}
            renderItem={({item}) => renderItem(item)}
            numColumns={3}
          />
          <SectionTitle title="Men" />
          <FlatList
            data={menCategories}
            style={styles.gridContainer}
            renderItem={({item}) => renderItem(item)}
            numColumns={3}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default CategorieScreen;
