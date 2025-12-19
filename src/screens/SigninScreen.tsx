import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const SigninScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Log into</Text>
        <Text style={styles.title}>your account</Text>
      </View>

      {/* Inputs */}
      <View style={styles.form}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("MainTabs")}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or log in with</Text>

        {/* Social icons */}
        <View style={styles.socialRow}>
          <SocialIcon uri="https://cdn-icons-png.flaticon.com/512/0/747.png" />
          <SocialIcon uri="https://cdn-icons-png.flaticon.com/512/300/300221.png" />
          <SocialIcon uri="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SigninScreen;

/* ================= COMPONENT ================= */

const SocialIcon = ({ uri }: { uri: string }) => (
  <View style={styles.socialCircle}>
    <Image source={{ uri }} style={styles.socialIcon} />
  </View>
);

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: isTablet ? 40 : 0,
  },

  header: {
    paddingTop: isTablet ? height * 0.12 : height * 0.1,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: isTablet ? 34 : 28,
    fontWeight: "600",
    color: "#000",
    lineHeight: isTablet ? 42 : 36,
  },

  form: {
    paddingHorizontal: 24,
    marginTop: isTablet ? 60 : 40,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: isTablet ? 14 : 10,
    marginBottom: isTablet ? 36 : 28,
    fontSize: isTablet ? 18 : 16,
    color: "#000",
  },

  forgot: {
    alignItems: "flex-end",
    marginBottom: isTablet ? 40 : 30,
  },

  forgotText: {
    fontSize: isTablet ? 15 : 13,
    color: "#777",
  },

  button: {
    backgroundColor: "#2B1B14",
    paddingVertical: isTablet ? 18 : 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: isTablet ? 32 : 24,
  },

  buttonText: {
    color: "#fff",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "600",
    letterSpacing: 1,
  },

  orText: {
    textAlign: "center",
    color: "#999",
    marginBottom: isTablet ? 24 : 18,
    fontSize: isTablet ? 14 : 12,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: isTablet ? 24 : 18,
    marginBottom: isTablet ? 60 : 40,
  },

  socialCircle: {
    width: isTablet ? 56 : 44,
    height: isTablet ? 56 : 44,
    borderRadius: isTablet ? 28 : 22,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },

  socialIcon: {
    width: isTablet ? 28 : 22,
    height: isTablet ? 28 : 22,
    resizeMode: "contain",
  },

  footer: {
    alignItems: "center",
    marginTop: "auto",
    paddingBottom: isTablet ? 40 : 30,
  },

  footerText: {
    fontSize: isTablet ? 15 : 13,
    color: "#777",
  },

  footerLink: {
    color: "#000",
    fontWeight: "500",
  },
});
