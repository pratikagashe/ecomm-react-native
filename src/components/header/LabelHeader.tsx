import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Spacing, Typography} from 'styles';
import {Ionicons} from '@expo/vector-icons';

const LabelHeader = ({label, navigation}: any) => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: Spacing.SCALE_18,
        }}>
        {navigation && (
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
            style={{marginRight: 12}}
          />
        )}
        <Text style={styles.title}>{label}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LabelHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});
