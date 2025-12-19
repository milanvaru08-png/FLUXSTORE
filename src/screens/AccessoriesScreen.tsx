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

const CARD_GAP = 12;
const CARD_WIDTH = (width - 16 * 2 - CARD_GAP) / 2;
const IMAGE_HEIGHT = height * 0.32;

const WOMEN_PRODUCTS = [
  { id: "a-1", name: "Hand Bag", price: 75, rating: 4.6, reviews: 40, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
  { id: "a-2", name: "Wrist Watch", price: 130, rating: 4.8, reviews: 66, image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f" },
  { id: "a-3", name: "Sunglasses", price: 50, rating: 4.3, reviews: 21, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
  { id: "a-4", name: "Shoes", price: 90, rating: 4.7, reviews: 49, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
  { id: "a-5", name: "Backpack", price: 65, rating: 4.4, reviews: 35, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
];

const AccessoriesScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
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
      <Text style={styles.price}>${item.price}</Text>

      <View style={styles.ratingRow}>
        <Text style={styles.stars}>★★★★★</Text>
        <Text style={styles.review}>({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Accessories</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={WOMEN_PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default AccessoriesScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    width: CARD_WIDTH,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: IMAGE_HEIGHT,
    borderRadius: 16,
  },

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },

  heartText: {
    fontSize: 16,
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
