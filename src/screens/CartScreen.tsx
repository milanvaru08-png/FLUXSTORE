import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../context/CartContext";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const CartScreen = ({ navigation }: any) => {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Your Cart</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* CART ITEMS */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => decreaseQty(item.id)}
                >
                  <Text style={styles.qtySymbol}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.qty}</Text>

                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => increaseQty(item.id)}
                >
                  <Text style={styles.qtySymbol}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => removeItem(item.id)}
                  style={styles.removeBtn}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* SUMMARY */}
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text>Product price</Text>
          <Text>${subtotal}</Text>
        </View>

        <View style={styles.row}>
          <Text>Shipping</Text>
          <Text>Free ship</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.total}>Subtotal</Text>
          <Text style={styles.total}>${subtotal}</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() =>
            navigation.navigate("Checkout", { subtotal })
          }
        >
          <Text style={styles.checkoutText}>
            Proceed to checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

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

  listContent: {
    padding: 16,
    paddingBottom: 10,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: isTablet ? 16 : 12,
    marginBottom: 14,
    elevation: 2,
  },

  image: {
    width: isTablet ? 90 : 70,
    height: isTablet ? 120 : 90,
    borderRadius: 14,
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: isTablet ? 17 : 14,
    fontWeight: "600",
  },

  price: {
    marginVertical: 6,
    fontSize: isTablet ? 15 : 13,
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },

  qtyBtn: {
    width: isTablet ? 36 : 28,
    height: isTablet ? 36 : 28,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },

  qtySymbol: {
    fontSize: isTablet ? 20 : 16,
  },

  qty: {
    marginHorizontal: 8,
    fontSize: isTablet ? 16 : 14,
  },

  removeBtn: {
    marginLeft: "auto",
    borderColor: "#111",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
  },

  removeText: {
    fontSize: isTablet ? 13 : 12,
    fontWeight: "500",
    color: "#111",
  },

  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
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

  checkoutBtn: {
    backgroundColor: "#2F2F2F",
    paddingVertical: isTablet ? 20 : 16,
    borderRadius: 30,
    marginTop: 10,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: isTablet ? 16 : 14,
  },
});
