import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const MEN_PRODUCTS = [
  { id: "m-1", name: "Denim Jacket", price: 70, rating: 4.6, reviews: 71, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c" },
  { id: "m-2", name: "Casual Shirt", price: 40, rating: 4.4, reviews: 36, image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070" },
  { id: "m-3", name: "Black T-Shirt", price: 25, rating: 4.5, reviews: 52, image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53" },
  { id: "m-4", name: "Formal Suit", price: 150, rating: 4.9, reviews: 90, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
  { id: "m-5", name: "Hoodie", price: 60, rating: 4.3, reviews: 29, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f" },
  { id: "m-6", name: "Winter Coat", price: 120, rating: 4.8, reviews: 75, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
  { id: "m-7", name: "Jeans", price: 55, rating: 4.4, reviews: 44, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f" },
  { id: "m-8", name: "Polo T-Shirt", price: 30, rating: 4.2, reviews: 22, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f" },
  { id: "m-9", name: "Sweatshirt", price: 65, rating: 4.7, reviews: 59, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c" },
  { id: "m-10", name: "Blazer", price: 110, rating: 4.9, reviews: 88, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
];

const MenScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          product: {
            ...item,
            images: [item.image, item.image, item.image],
          },
        })
      }
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <TouchableOpacity style={styles.heart}>
        <Text style={styles.heartText}>♡</Text>
      </TouchableOpacity>

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>

      <View style={styles.ratingRow}>
        <Text style={styles.stars}>★★★★★</Text>
        <Text style={styles.review}>({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Men</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* PRODUCT GRID */}
      <FlatList
        data={MEN_PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 20,
        }}
      />
    </SafeAreaView>
  );
};

export default MenScreen;

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
    paddingVertical: isTablet ? 20 : 12,
  },

  back: {
    fontSize: isTablet ? 34 : 28,
    color: "#000",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
    color: "#000",
  },

  card: {
    width: isTablet ? "31%" : "48%",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: isTablet ? height * 0.28 : 220,
    borderRadius: 16,
  },

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    width: isTablet ? 32 : 28,
    height: isTablet ? 32 : 28,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },

  heartText: {
    fontSize: isTablet ? 18 : 16,
    color: "#E53935",
  },

  name: {
    marginTop: 8,
    fontSize: isTablet ? 16 : 14,
    color: "#222",
  },

  price: {
    fontSize: isTablet ? 16 : 14,
    fontWeight: "600",
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  stars: {
    color: "#4CAF50",
    fontSize: isTablet ? 14 : 12,
    marginRight: 4,
  },

  review: {
    fontSize: isTablet ? 14 : 12,
    color: "#777",
  },
});
