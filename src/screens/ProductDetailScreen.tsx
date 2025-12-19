import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../context/CartContext";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;
const IMAGE_HEIGHT = isTablet ? height * 0.55 : height * 0.45;

const ProductDetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params;
  const [liked, setLiked] = useState(false);
  const [size, setSize] = useState("M");
  const { addToCart } = useCart();

  return (
    <SafeAreaView style={styles.safe}>
      {/* ===== IMAGE CAROUSEL ===== */}
      <View style={{ height: IMAGE_HEIGHT }}>
        <FlatList
          data={product.images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />

        {/* Back */}
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        {/* Like */}
        <TouchableOpacity
          style={styles.like}
          onPress={() => setLiked(!liked)}
        >
          <Text style={{ fontSize: isTablet ? 26 : 20 }}>
            {liked ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ===== DETAILS ===== */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <Text style={styles.rating}>⭐⭐⭐⭐⭐ ({product.rating})</Text>

        {/* Color */}
        <Text style={styles.section}>Color</Text>
        <View style={styles.colorRow}>
          {["#E6C1A2", "#000", "#F26A6A"].map((c, i) => (
            <View key={i} style={[styles.color, { backgroundColor: c }]} />
          ))}
        </View>

        {/* Size */}
        <Text style={styles.section}>Size</Text>
        <View style={styles.sizeRow}>
          {["S", "M", "L"].map((s) => (
            <TouchableOpacity
              key={s}
              onPress={() => setSize(s)}
              style={[
                styles.size,
                size === s && styles.sizeActive,
              ]}
            >
              <Text style={{ color: size === s ? "#fff" : "#000" }}>
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Description */}
        <Text style={styles.section}>Description</Text>
        <Text style={styles.desc}>
          Sportswear is no longer under culture. It is fashion today and designed
          for comfort and style.
        </Text>

        {/* Reviews */}
        <Text style={styles.section}>Reviews</Text>
        <Text style={styles.reviewScore}>4.9 out of 5 ⭐</Text>
      </ScrollView>

      {/* ===== ADD TO CART ===== */}
      <View style={styles.cartBar}>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => {
            addToCart(product);
            navigation.navigate("CartScreen");
          }}
        >
          <Text style={styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  image: {
    width,
    height: IMAGE_HEIGHT,
    resizeMode: "cover",
  },

  back: {
    position: "absolute",
    top: isTablet ? 30 : 16,
    left: isTablet ? 30 : 16,
    width: isTablet ? 48 : 36,
    height: isTablet ? 48 : 36,
    borderRadius: isTablet ? 24 : 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: { fontSize: isTablet ? 28 : 20 },

  like: {
    position: "absolute",
    top: isTablet ? 30 : 16,
    right: isTablet ? 30 : 16,
    width: isTablet ? 48 : 36,
    height: isTablet ? 48 : 36,
    borderRadius: isTablet ? 24 : 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    padding: isTablet ? 28 : 20,
    paddingBottom: isTablet ? 160 : 120,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  title: {
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  price: {
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  rating: {
    color: "#4F8F6A",
    marginBottom: 14,
    fontSize: isTablet ? 16 : 14,
  },

  section: {
    fontWeight: "600",
    marginTop: 18,
    marginBottom: 8,
    fontSize: isTablet ? 18 : 14,
  },

  colorRow: {
    flexDirection: "row",
    gap: isTablet ? 18 : 12,
  },

  color: {
    width: isTablet ? 40 : 30,
    height: isTablet ? 40 : 30,
    borderRadius: isTablet ? 20 : 15,
  },

  sizeRow: {
    flexDirection: "row",
    gap: isTablet ? 18 : 12,
  },

  size: {
    width: isTablet ? 46 : 36,
    height: isTablet ? 46 : 36,
    borderRadius: isTablet ? 23 : 18,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  sizeActive: {
    backgroundColor: "#000",
  },

  desc: {
    color: "#555",
    lineHeight: isTablet ? 26 : 20,
    fontSize: isTablet ? 16 : 14,
  },

  reviewScore: {
    fontSize: isTablet ? 18 : 16,
    fontWeight: "600",
  },

  cartBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#2F2F2F",
    padding: isTablet ? 24 : 16,
  },

  cartBtn: {
    alignItems: "center",
  },

  cartText: {
    color: "#fff",
    fontSize: isTablet ? 18 : 16,
    fontWeight: "600",
  },
});
