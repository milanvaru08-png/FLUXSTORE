import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const CustomDrawer = ({ navigation }: any) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* ITEMS */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("MyOrders")}
      >
        <Text style={styles.text}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={[styles.text, { color: "#E53935" }]}>
          Logout
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  close: {
    fontSize: 22,
  },

  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },

  text: {
    fontSize: 16,
  },
});
