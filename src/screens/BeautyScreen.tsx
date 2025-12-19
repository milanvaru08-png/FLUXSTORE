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
const IMAGE_HEIGHT = height * 0.3;

const WOMEN_PRODUCTS = [
  { id: "b-1", name: "Lipstick", price: 25, rating: 4.8, reviews: 120, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa" },
  { id: "b-2", name: "Perfume", price: 80, rating: 4.9, reviews: 90, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f" },
  { id: "b-3", name: "Face Cream", price: 35, rating: 4.5, reviews: 60, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { id: "b-4", name: "Makeup Kit", price: 95, rating: 4.7, reviews: 77, image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30" },
  { id: "b-5", name: "Nail Polish", price: 20, rating: 4.3, reviews: 33, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
];

const BeautyScreen = ({ navigation }: any) => {
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
        <Text style={styles.title}>Beauty</Text>
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

export default BeautyScreen;

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
