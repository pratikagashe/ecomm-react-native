import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons, EvilIcons, Octicons, Feather} from '@expo/vector-icons';
import HomeScreen from 'screens/home';
import CategorieScreen from 'screens/categories';
import {HeaderLeft, HeaderRight} from 'components/header';
import SubCategoriesScreen from 'screens/subcategories';
import NotificationScreen from 'screens/notification';
import LabelHeader from 'components/header/LabelHeader';
import SettingsScreen from 'screens/settings';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <HeaderLeft navigation={navigation} hideBackButton={true} />
          ),
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const CategoriesStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={CategorieScreen}
        options={{
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backTo="TabHome" />
          ),
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="SubCategoriesScreen"
        component={SubCategoriesScreen}
        options={{
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backTo="Categories" />
          ),
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerLeft: () => <LabelHeader label="Notifications" />,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLeft: () => <LabelHeader label="Settings" />,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      activeColor="#000"
      inactiveColor="#555"
      barStyle={{backgroundColor: '#f9f9f9'}}>
      <Tab.Screen
        name="TabHome"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}: any) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabCategories"
        component={CategoriesStackScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}: any) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabNotifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}: any) => (
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabSettings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}: any) => (
            <EvilIcons name="gear" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
