import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {ISectionTitle, ISubHeading} from 'utils/interface';
import {Typography, Spacing} from 'styles';

export const SectionTitle = ({title, btnText}: ISectionTitle) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {btnText && (
        <TouchableHighlight onPress={() => {}} underlayColor="transparent">
          <Text style={styles.button}>{btnText}</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export const SubHeading = ({title}: ISubHeading) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: Spacing.SCALE_18,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  subHeading: {
    fontSize: 15,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  button: {
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});
