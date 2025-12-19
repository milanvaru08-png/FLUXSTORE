import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import IntroCarouselScreen from '../screens/IntroCarouselScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationScreen from '../screens/VerificationScreen';
import CreateNewPasswordScreen from '../screens/CreateNewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from "./BottomTabNavigator";
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottamProfileScreen from '../screens/BottamProfileScreen';

import WomenScreen from '../screens/WomenScreen';
import MenScreen from '../screens/MenScreen';
import AccessoriesScreen from '../screens/AccessoriesScreen';
import BeautyScreen from '../screens/BeautyScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import PaymentScreen from '../screens/PaymentScreen';
import OrderSuccessModal from '../screens/OrderSuccessModal';
import SideMenuScreen from '../screens/SideMenuScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationSettingScreen from '../screens/NotificationSettingScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Intro" component={IntroCarouselScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
        <Stack.Screen name="WomenScreen" component={WomenScreen} />
        <Stack.Screen name="MenScreen" component={MenScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="MyOrders" component={MyOrdersScreen} />

        <Stack.Screen name="AccessoriesScreen" component={AccessoriesScreen} />
        <Stack.Screen name="BeautyScreen" component={BeautyScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="SuccessScreen" component={OrderSuccessModal} />
        <Stack.Screen name="SideMenuScreen" component={SideMenuScreen} />
        <Stack.Screen name="NotificationSettingScreen" component={NotificationSettingScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />



        <Stack.Screen
  name="ProductDetail"
  component={ProductDetailScreen}
/>
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPasswordScreen}
        />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="BottamProfileScreen" component={BottamProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
