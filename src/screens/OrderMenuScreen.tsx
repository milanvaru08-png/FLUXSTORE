import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderMenuScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Order Options</Text>

        {/* Empty view for center alignment */}
        <View style={{ width: 24 }} />
      </View>

      {/* CONTENT */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("OrderMenu")}
        >
          <Text style={styles.cardTitle}>⭐ Rate Your Product</Text>
          <Text style={styles.cardSub}>
            Share your feedback about the product
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("OrderMenu")}
        >
          <Text style={styles.cardTitle}>🚚 Track Your Order</Text>
          <Text style={styles.cardSub}>
            See live status of your order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderMenuScreen;

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },

  back: {
    fontSize: 22,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },

  container: {
    padding: 20,
  },

  card: {
    backgroundColor: "#F5F5F5",
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },

  cardSub: {
    fontSize: 13,
    color: "#666",
  },
});
