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

const SignupScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ===== TOP AREA ===== */}
      <View style={styles.top}>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.title}>your account</Text>

        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#999"
          style={styles.input}
        />

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

        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* ===== BOTTOM AREA ===== */}
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MainTabs")}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign up with</Text>

        {/* Social Icons */}
        <View style={styles.socialRow}>
          <SocialIcon uri="https://cdn-icons-png.flaticon.com/512/0/747.png" />
          <SocialIcon uri="https://cdn-icons-png.flaticon.com/512/300/300221.png" />
          <SocialIcon uri="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
        </View>

        {/* Login */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.loginLink}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

/* ================= COMPONENT ================= */

const SocialIcon = ({ uri }: { uri: string }) => (
  <Image source={{ uri }} style={styles.socialIcon} />
);

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: isTablet ? 40 : 0,
  },

  top: {
    flex: 0.6,
    paddingHorizontal: 24,
    paddingTop: isTablet ? height * 0.1 : height * 0.08,
  },

  title: {
    fontSize: isTablet ? 34 : 28,
    fontWeight: "600",
    color: "#000",
    lineHeight: isTablet ? 42 : 36,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: isTablet ? 14 : 10,
    marginTop: isTablet ? 28 : 22,
    fontSize: isTablet ? 18 : 16,
    color: "#000",
  },

  bottom: {
    flex: 0.4,
    alignItems: "center",
    paddingTop: isTablet ? 40 : 30,
  },

  button: {
    backgroundColor: "#2B1B14",
    paddingHorizontal: isTablet ? 80 : 50,
    paddingVertical: isTablet ? 18 : 14,
    borderRadius: 30,
    marginBottom: isTablet ? 28 : 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "600",
    letterSpacing: 1,
  },

  orText: {
    color: "#161616",
    marginBottom: isTablet ? 22 : 16,
    fontSize: isTablet ? 14 : 13,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: isTablet ? 260 : 180,
    marginBottom: isTablet ? 28 : 20,
  },

  socialIcon: {
    width: isTablet ? 56 : 44,
    height: isTablet ? 56 : 44,
    borderRadius: isTablet ? 28 : 22,
  },

  loginRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  loginText: {
    color: "#1a1919",
    fontSize: isTablet ? 15 : 13,
  },

  loginLink: {
    color: "#0d0c0c",
    fontWeight: "500",
    fontSize: isTablet ? 15 : 13,
  },
});
