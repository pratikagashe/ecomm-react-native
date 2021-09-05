import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Switch,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {Ionicons, Entypo, MaterialIcons, Octicons} from '@expo/vector-icons';

const DrawerContent = (props: any) => {
  const {navigation} = props;

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <View style={styles.row}>
              <Avatar.Image
                source={require('../assets/images/profileImage.jpg')}
                size={50}
              />
              <Title style={styles.title}>Pratik Agashe</Title>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Octicons name="home" size={size} color={color} />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Profile"
              icon={({color, size}) => (
                <MaterialIcons
                  name="person-outline"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Wishlist"
              icon={({color, size}) => (
                <Entypo name="heart-outlined" size={size} color={color} />
              )}
              onPress={() => navigation.navigate('Wishlist')}
            />
            <DrawerItem
              label="Coupons"
              icon={({color, size}) => (
                <Octicons name="tag" size={size} color={color} />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Setting"
              icon={({color, size}) => (
                <Octicons name="settings" size={size} color={color} />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Help Centre"
              icon={({color, size}) => (
                <Ionicons
                  name="ios-help-circle-outline"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          label="Sign out"
          icon={({color, size}) => (
            <Ionicons name="ios-log-out" size={size} color={color} />
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfo: {
    paddingLeft: 24,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  caption: {
    fontSize: 14,
    lineHeight: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    marginTop: 3,
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 18,
    borderTopColor: '#f7f7f7',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
