import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import BottamProfileScreen from "../screens/BottamProfileScreen";

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: {
    active: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
  },
  Search: {
    active: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/149/149309.png",
  },
  Cart: {
    active: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
  },
  Profile: {
    active: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    inactive: "https://cdn-icons-png.flaticon.com/512/847/847970.png",
  },
};

/* ================= CUSTOM TAB BAR ================= */

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const iconSet = ICONS[route.name];

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.tabItem}
          >
            <Image
              source={{
                uri: isFocused ? iconSet.active : iconSet.inactive,
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

/* ================= NAVIGATOR ================= */

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={MyOrdersScreen} />
      <Tab.Screen name="Profile" component={BottamProfileScreen} />
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
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
