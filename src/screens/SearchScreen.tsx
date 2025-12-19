import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRODUCTS } from "../data/products";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const SearchScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    return PRODUCTS.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* SEARCH INPUT */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search products, categories..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          autoFocus
        />
      </View>

      {/* RESULTS */}
      {query.length === 0 ? (
        <Text style={styles.hint}>Type something to search</Text>
      ) : filteredProducts.length === 0 ? (
        <Text style={styles.hint}>No results found</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
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
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: isTablet ? 24 : 16,
  },

  back: { fontSize: isTablet ? 32 : 26 },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  searchBox: {
    marginHorizontal: 16,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 6,
  },

  input: {
    height: isTablet ? 54 : 46,
    fontSize: isTablet ? 16 : 14,
  },

  hint: {
    textAlign: "center",
    marginTop: 40,
    color: "#888",
    fontSize: isTablet ? 16 : 14,
  },

  list: {
    padding: isTablet ? 24 : 16,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: isTablet ? 16 : 12,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
  },

  image: {
    width: isTablet ? 80 : 60,
    height: isTablet ? 110 : 80,
    borderRadius: 12,
    marginRight: 12,
  },

  name: {
    fontWeight: "600",
    fontSize: isTablet ? 16 : 14,
  },

  category: {
    color: "#888",
    fontSize: isTablet ? 14 : 12,
    marginVertical: 4,
  },

  price: {
    fontWeight: "700",
    fontSize: isTablet ? 16 : 14,
  },
});
