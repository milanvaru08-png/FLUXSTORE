import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AppImages } from "../utils/appImages";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const DATA = [
  {
    id: "1",
    title: "Discover something new",
    subtitle: "Special new arrivals just for you",
    image: AppImages.A,
  },
  {
    id: "2",
    title: "Update trendy outfit",
    subtitle: "Favorite brands and hottest trends",
    image: AppImages.B,
  },
  {
    id: "3",
    title: "Explore your true style",
    subtitle: "Relax and let us bring the style to you",
    image: AppImages.C,
  },
];

const IntroCarouselScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  const flatRef = useRef<FlatList>(null);

  const onMomentumScrollEnd = (e: any) => {
    const newIndex = Math.round(
      e.nativeEvent.contentOffset.x / width
    );
    setIndex(newIndex);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>

      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <FlatList
        ref={flatRef}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={renderItem}
      />

      {/* BOTTOM SECTION */}
      <View style={styles.bottom}>
        <View style={styles.dots}>
          {DATA.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                index === i && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.buttonText}>
            Shopping now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroCarouselScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  slide: {
    width,
    alignItems: "center",
    paddingTop: isTablet ? height * 0.12 : height * 0.1,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: isTablet ? 28 : 22,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: isTablet ? 16 : 14,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
    paddingHorizontal: isTablet ? 80 : 40,
    lineHeight: isTablet ? 24 : 20,
  },

  card: {
    width: isTablet ? width * 0.5 : width * 0.7,
    height: isTablet ? height * 0.55 : height * 0.48,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#4A4A4A",
    paddingTop: isTablet ? 30 : 24,
    paddingBottom: isTablet ? 50 : 40,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  dots: {
    flexDirection: "row",
    marginBottom: 18,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#888",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#FFF",
    width: 16,
  },

  button: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 30,
    paddingHorizontal: isTablet ? 60 : 38,
    paddingVertical: isTablet ? 16 : 12,
  },

  buttonText: {
    color: "#FFF",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "500",
  },
});
