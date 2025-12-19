import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

// 🔹 Dynamic sizing
const CARD_WIDTH = isTablet ? "31%" : "48%";
const IMAGE_HEIGHT = isTablet ? 260 : width * 0.55;



const WOMEN_PRODUCTS = [
  {
    id: "w-1",
    name: "Linen Dress",
    price: 52.00,
    rating: 4.8,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: "w-2",
    name: "Fitted Waist Dress",
    price: 47.99    ,
    rating: 4.6,
    reviews: 53,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    id: "w-3",
    name: "Maxi Dress",
    price: 68.00,
    rating: 4.7,
    reviews: 46,
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31",
  },
  {
    id: "w-4",
    name: "Front Tie Mini Dress",
    price: 59.00,
    rating: 4.5,
    reviews: 38,
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
  },
  {
    id: "w-5",
    name: "Summer Floral Dress",
    price: 44.00,
    rating: 4.4,
    reviews: 29,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: "w-6",
    name: "Black Casual Dress",
    price: 49.00,
    rating: 4.6,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
  },
  {
    id: "w-7",
    name: "White Party Dress",
    price: 72.00,
    rating: 4.9,
    reviews: 58,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    id: "w-8",
    name: "Sleeveless Dress",
    price: 39.99,
    rating: 4.3,
    reviews: 22,
    image:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
  },
  {
    id: "w-9",
    name: "Brown Evening Dress",
    price: 85.00,
    rating: 4.8,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    id: "w-10",
    name: "Modern Office Dress",
    price: 55.00,
    rating: 4.5,
    reviews: 35,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
];

const WomenScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
    style={styles.card}
    activeOpacity={0.8}
   onPress={() =>
  navigation.navigate("ProductDetail", {
    product: {
      ...item,
      images: [
        item.image,
        item.image,
        item.image,
      ],
    },
  })
}

  >
      {/* Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Like Button */}
      <TouchableOpacity style={styles.heart}>
        <Text style={styles.heartText}>♡</Text>
      </TouchableOpacity>

      {/* Info */}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>

      {/* Rating */}
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
        <Text style={styles.title}>Women</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Products */}
      <FlatList
        data={WOMEN_PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
};

export default WomenScreen;

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
    fontSize: 28,
    color: "#000",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
    color: "#000",
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    width: CARD_WIDTH,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: IMAGE_HEIGHT,
    borderRadius: 14,
  },

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: isTablet ? 15 : 14,
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
    fontSize: 12,
    marginRight: 4,
  },

  review: {
    fontSize: 12,
    color: "#777",
  },
});