import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigation from './MainTabNavigation';
import DrawerContent from './DrawerContent';
import ProductScreen from 'screens/product';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderLeft, HeaderRight} from 'components/header';
import CartScreen from 'screens/checkout/Cart';
import WishlistScreen from 'screens/wishlist';
import LabelHeader from 'components/header/LabelHeader';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ProductStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductStack"
        component={ProductScreen}
        options={{
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const CartStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartStack"
        component={CartScreen}
        options={{
          headerLeft: () => (
            <LabelHeader navigation={navigation} label="Cart" />
          ),
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const WishlistStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishlistStack"
        component={WishlistScreen}
        options={{
          headerLeft: () => (
            <LabelHeader navigation={navigation} label="Wishlist" />
          ),
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabNavigation} />
        <Drawer.Screen name="Product" component={ProductStackScreen} />
        <Drawer.Screen name="Cart" component={CartStackScreen} />
        <Drawer.Screen name="Wishlist" component={WishlistStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
