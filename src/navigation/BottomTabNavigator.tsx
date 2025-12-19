import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SideMenuScreen from "../screens/SideMenuScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import BottamProfileScreen from "../screens/BottamProfileScreen";

const Tab = createBottomTabNavigator();

const ICONS = {
  home: {
    active: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
  },
  search: {
    active: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/149/149309.png",
  },
  cart: {
    active: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
  },
  profile: {
    active: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/847/847970.png",
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{ uri: focused ? ICONS.home.active : ICONS.home.inactive }}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: focused ? ICONS.search.active : ICONS.search.inactive,
              }}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={MyOrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{ uri: focused ? ICONS.cart.active : ICONS.cart.inactive }}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="BottamProfileScreen"
        component={BottamProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: focused ? ICONS.profile.active : ICONS.profile.inactive,
              }}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 14,
    left: 16,
    right: 16,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
