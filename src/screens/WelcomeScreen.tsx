import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AppImages } from "../utils/appImages";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={AppImages.WEL}
        style={styles.image}
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View style={styles.overlay} />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to GemStore!</Text>
          <Text style={styles.subtitle}>
            The home for a fashionista
          </Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Intro")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  content: {
    alignItems: "center",
    paddingBottom: height * 0.08,
    paddingHorizontal: 24,
  },

  title: {
    color: "#fff",
    fontSize: isTablet ? 34 : 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    color: "#fff",
    fontSize: isTablet ? 18 : 14,
    marginBottom: height * 0.04,
    textAlign: "center",
  },

  button: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: isTablet ? 60 : 40,
    paddingVertical: isTablet ? 16 : 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "500",
  },
});
