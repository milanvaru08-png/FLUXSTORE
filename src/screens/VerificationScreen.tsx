import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const VerificationScreen = ({ navigation }: any) => {
  const [timer, setTimer] = useState(10);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  /* ===== TIMER ===== */
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* ===== HANDLE OTP ===== */
  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input
    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    // Auto navigate when complete
    if (newCode.every((d) => d !== "")) {
      setTimeout(() => {
        navigation.replace("CreateNewPassword");
      }, 300);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Verification code</Text>
      <Text style={styles.subtitle}>
        Please enter the verification code we sent{"\n"}
        to your email address
      </Text>

      {/* OTP */}
      <View style={styles.otpRow}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref!)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Resend */}
      <Text style={styles.resend}>
        Resend in 00:{timer < 10 ? `0${timer}` : timer}
      </Text>
    </View>
  );
};

export default VerificationScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: isTablet ? 40 : 24,
    paddingTop: height * 0.08,
  },

  back: {
    width: isTablet ? 44 : 36,
    height: isTablet ? 44 : 36,
    borderRadius: isTablet ? 22 : 18,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.04,
  },

  backText: {
    fontSize: isTablet ? 24 : 20,
    color: "#000",
  },

  title: {
    fontSize: isTablet ? 28 : 24,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: isTablet ? 16 : 14,
    color: "#777",
    lineHeight: isTablet ? 24 : 20,
    marginBottom: height * 0.06,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  otpInput: {
    width: isTablet ? 80 : 60,
    height: isTablet ? 80 : 60,
    borderRadius: isTablet ? 40 : 30,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: isTablet ? 26 : 20,
    color: "#000",
  },

  resend: {
    color: "#aaa",
    fontSize: isTablet ? 15 : 13,
  },
});
