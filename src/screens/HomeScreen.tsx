import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

/* ================= DATA ================= */

const bannerImages = [
  "https://images.unsplash.com/photo-1520974735194-6c8c8a36e43c",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
];

const categories = [
  { name: "Women", image: "https://cdn-icons-png.flaticon.com/512/194/194938.png", key: "WomenScreen" },
  { name: "Men", image: "https://cdn-icons-png.flaticon.com/512/194/194931.png", key: "MenScreen" },
  { name: "Accessories", image: "https://cdn-icons-png.flaticon.com/512/3081/3081648.png", key: "AccessoriesScreen" },
  { name: "Beauty", image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png", key: "BeautyScreen" },
];

const products = [
  { id: 1, name: "Long Sleeve Dress", price: 45, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { id: 2, name: "Sportwear Set", price: 80, image: "https://images.unsplash.com/photo-1520975698519-59c8a5c0b7a1" },
  { id: 3, name: "Turtleneck Sweater", price: 39.99, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
  { id: 4, name: "Casual Jacket", price: 55, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
];

/* ================= SCREEN ================= */

const HomeScreen = ({ navigation }: any) => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const onBannerScroll = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setBannerIndex(index);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("SideMenuScreen")}>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>

          <Text style={styles.logo}>Gemstore</Text>

          <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
            <Text style={styles.bell}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORIES */}
        <View style={styles.categoryRow}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => navigation.navigate(item.key)}
            >
              <Image source={{ uri: item.image }} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BANNER */}
        <FlatList
          data={bannerImages}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onBannerScroll}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.banner}>
              <Image source={{ uri: item }} style={styles.bannerImage} />
              <View style={styles.bannerText}>
                <Text style={styles.bannerTitle}>Autumn</Text>
                <Text style={styles.bannerTitle}>Collection</Text>
                <Text style={styles.bannerYear}>2022</Text>
              </View>
            </View>
          )}
        />

        {/* DOTS */}
        <View style={styles.dotsRow}>
          {bannerImages.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, bannerIndex === i && styles.activeDot]}
            />
          ))}
        </View>

        {/* FEATURE PRODUCTS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Feature Products</Text>
          <Text style={styles.showAll}>Show all</Text>
        </View>

        <View style={styles.productRow}>
          {products.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
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
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: isTablet ? 20 : 14,
  },

  menu: { fontSize: isTablet ? 26 : 20 },
  logo: { fontSize: isTablet ? 22 : 18, fontWeight: "600" },
  bell: { fontSize: isTablet ? 22 : 18 },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  categoryItem: { alignItems: "center" },

  categoryIcon: {
    width: isTablet ? 60 : 44,
    height: isTablet ? 60 : 44,
    marginBottom: 6,
  },

  categoryText: {
    fontSize: isTablet ? 14 : 12,
    color: "#444",
  },

  banner: {
    width,
    paddingHorizontal: 20,
  },

  bannerImage: {
    width: "100%",
    height: isTablet ? height * 0.3 : 180,
    borderRadius: 20,
  },

  bannerText: {
    position: "absolute",
    left: 40,
    top: 40,
  },

  bannerTitle: {
    fontSize: isTablet ? 28 : 22,
    color: "#fff",
    fontWeight: "600",
  },

  bannerYear: {
    fontSize: isTablet ? 18 : 16,
    color: "#fff",
    marginTop: 4,
  },

  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#000",
    width: 14,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 12,
  },

  sectionTitle: {
    fontSize: isTablet ? 20 : 16,
    fontWeight: "600",
  },

  showAll: {
    fontSize: isTablet ? 14 : 12,
    color: "#777",
  },

  productRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  productCard: {
    width: isTablet ? "31%" : "48%",
    marginBottom: 16,
  },

  productImage: {
    width: "100%",
    height: isTablet ? 220 : 180,
    borderRadius: 12,
    marginBottom: 6,
  },

  productName: {
    fontSize: isTablet ? 14 : 12,
    color: "#333",
  },

  productPrice: {
    fontSize: isTablet ? 14 : 12,
    fontWeight: "600",
  },
});
