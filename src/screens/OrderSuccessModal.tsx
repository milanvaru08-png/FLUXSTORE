import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const OrderSuccessScreen = () => {
  const navigation = useNavigation<any>();

  const handleContinueShopping = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "MainTabs" }],
      })
    );
  };

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconCircle}>
        <Text style={styles.check}>✓</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Order Successful</Text>

      {/* Description */}
      <Text style={styles.desc}>
        Thank you for your purchase.{"\n"}
        Your order has been placed successfully.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.navigate("MyOrders")}
        activeOpacity={0.85}
      >
        <Text style={styles.btnText}>Go to Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccessScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: isTablet ? 80 : 24,
  },

  iconCircle: {
    width: isTablet ? 120 : 80,
    height: isTablet ? 120 : 80,
    borderRadius: isTablet ? 60 : 40,
    backgroundColor: "#E8F5EE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: isTablet ? 30 : 20,
  },

  check: {
    fontSize: isTablet ? 56 : 40,
    color: "#2E7D32",
    fontWeight: "700",
  },

  title: {
    fontSize: isTablet ? 28 : 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    color: "#666",
    lineHeight: isTablet ? 26 : 22,
    fontSize: isTablet ? 18 : 14,
    marginBottom: isTablet ? 40 : 30,
  },

  btn: {
    width: isTablet ? "70%" : "100%",
    backgroundColor: "#2F2F2F",
    paddingVertical: isTablet ? 18 : 14,
    borderRadius: 30,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: isTablet ? 18 : 16,
    fontWeight: "600",
  },
});
