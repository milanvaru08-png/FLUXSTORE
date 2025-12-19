import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const CheckoutScreen = ({ navigation, route }: any) => {
  const [shippingMethod, setShippingMethod] = useState("free");
  const { subtotal } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Check out</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* STEP */}
        <Text style={styles.step}>STEP 1</Text>
        <Text style={styles.sectionTitle}>Shipping</Text>

        {/* FORM */}
        <TextInput placeholder="First name *" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="Last name *" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="Country *" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="Street name *" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="City *" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="State / Province" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="Zip-code *" placeholderTextColor="#111" style={styles.input} />
        <TextInput placeholder="Phone number *" placeholderTextColor="#111" style={styles.input} />

        {/* SHIPPING METHOD */}
        <Text style={styles.sectionTitle}>Shipping method</Text>

        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setShippingMethod("free")}
        >
          <View style={styles.radioOuter}>
            {shippingMethod === "free" && <View style={styles.radioInner} />}
          </View>
          <View>
            <Text style={styles.radioTitle}>Free</Text>
            <Text style={styles.radioSub}>Delivery to home (3–7 days)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setShippingMethod("fast")}
        >
          <View style={styles.radioOuter}>
            {shippingMethod === "fast" && <View style={styles.radioInner} />}
          </View>
          <View>
            <Text style={styles.radioTitle}>$9.90</Text>
            <Text style={styles.radioSub}>Fast delivery (2–3 days)</Text>
          </View>
        </TouchableOpacity>

        {/* COUPON */}
        <Text style={styles.sectionTitle}>Coupon Code</Text>
        <View style={styles.couponRow}>
          <TextInput
            placeholder="Have a code? type it here..."
            placeholderTextColor="#111"
            style={styles.couponInput}
          />
          <Text style={styles.validate}>Validate</Text>
        </View>

        {/* SUMMARY */}
        <View style={styles.summary}>
          <View style={styles.row}>
            <Text>Product price</Text>
            <Text>${subtotal}</Text>
          </View>

          <View style={styles.row}>
            <Text>Shipping</Text>
            <Text>Free</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.total}>Subtotal</Text>
            <Text style={styles.total}>${subtotal}</Text>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.payBtn}
          onPress={() => navigation.navigate("PaymentScreen")}
        >
          <Text style={styles.payText}>Continue to payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 22 : 16,
  },

  back: {
    fontSize: isTablet ? 34 : 26,
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  scroll: {
    padding: 16,
    paddingBottom: 40,
  },

  step: {
    color: "#999",
    fontSize: isTablet ? 14 : 12,
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: isTablet ? 20 : 18,
    fontWeight: "600",
    marginTop: 18,
    marginBottom: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#2e2c2c",
    color: "#000",
    paddingVertical: isTablet ? 16 : 12,
    marginBottom: 12,
    fontSize: isTablet ? 16 : 14,
  },

  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  radioOuter: {
    width: isTablet ? 24 : 20,
    height: isTablet ? 24 : 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4F8F6A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  radioInner: {
    width: isTablet ? 12 : 10,
    height: isTablet ? 12 : 10,
    borderRadius: 6,
    backgroundColor: "#4F8F6A",
  },

  radioTitle: {
    fontWeight: "600",
    fontSize: isTablet ? 16 : 14,
  },

  radioSub: {
    fontSize: isTablet ? 14 : 12,
    color: "#777",
  },

  couponRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    paddingHorizontal: 12,
  },

  couponInput: {
    flex: 1,
    paddingVertical: isTablet ? 14 : 10,
    fontSize: isTablet ? 15 : 13,
    color: "#000",
  },

  validate: {
    color: "#4F8F6A",
    fontWeight: "600",
    fontSize: isTablet ? 15 : 13,
  },

  summary: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  total: {
    fontWeight: "700",
    fontSize: isTablet ? 16 : 14,
  },

  payBtn: {
    backgroundColor: "#2F2F2F",
    paddingVertical: isTablet ? 20 : 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },

  payText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: isTablet ? 18 : 16,
  },
});
