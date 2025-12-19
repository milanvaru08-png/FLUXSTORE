import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const ForgotPasswordScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Back button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password?</Text>

        <Text style={styles.description}>
          Enter email associated with your account and we’ll send an email with
          instructions to reset your password
        </Text>

        <TextInput
          placeholder="enter your email here"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("VerificationScreen")}
        >
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backBtn: {
    paddingTop: isTablet ? height * 0.12 : height * 0.08,
    paddingLeft: 20,
  },

  backText: {
    fontSize: isTablet ? 36 : 28,
    color: "#000",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: isTablet ? 60 : 40,
  },

  title: {
    fontSize: isTablet ? 28 : 24,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },

  description: {
    fontSize: isTablet ? 16 : 14,
    color: "#777",
    lineHeight: isTablet ? 24 : 20,
    marginBottom: isTablet ? 50 : 40,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: isTablet ? 14 : 10,
    fontSize: isTablet ? 18 : 16,
    color: "#000",
    marginBottom: isTablet ? 60 : 50,
  },

  button: {
    backgroundColor: "#2B1B14",
    alignSelf: "center",
    paddingHorizontal: isTablet ? 90 : 60,
    paddingVertical: isTablet ? 18 : 14,
    borderRadius: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
