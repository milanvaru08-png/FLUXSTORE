import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  StatusBar,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const CreateNewPasswordScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Text style={styles.title}>Create new password</Text>
      <Text style={styles.subtitle}>
        Your new password must be different{"\n"}
        from previous password
      </Text>

      {/* PASSWORD */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={{
              uri: showPassword
                ? "https://cdn-icons-png.flaticon.com/512/159/159604.png"
                : "https://cdn-icons-png.flaticon.com/512/159/159078.png",
            }}
            style={styles.eye}
          />
        </TouchableOpacity>
      </View>

      {/* CONFIRM PASSWORD */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="#999"
          secureTextEntry={!showConfirm}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
          <Image
            source={{
              uri: showConfirm
                ? "https://cdn-icons-png.flaticon.com/512/159/159604.png"
                : "https://cdn-icons-png.flaticon.com/512/159/159078.png",
            }}
            style={styles.eye}
          />
        </TouchableOpacity>
      </View>

      {/* CONFIRM BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSuccessModal(true)}
      >
        <Text style={styles.buttonText}>CONFIRM</Text>
      </TouchableOpacity>

      {/* SUCCESS MODAL */}
      <Modal transparent visible={successModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
              }}
              style={styles.successIcon}
            />

            <Text style={styles.modalTitle}>Password changed!</Text>
            <Text style={styles.modalSub}>
              Your password has been changed{"\n"}
              successfully.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSuccessModal(false);
                navigation.navigate("MainTabs");
              }}
            >
              <Text style={styles.modalButtonText}>Browse Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateNewPasswordScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: isTablet ? height * 0.18 : height * 0.12,
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
    marginBottom: 40,
    lineHeight: isTablet ? 24 : 20,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 30,
  },

  input: {
    flex: 1,
    paddingVertical: isTablet ? 14 : 10,
    fontSize: isTablet ? 18 : 16,
    color: "#000",
  },

  eye: {
    width: isTablet ? 26 : 22,
    height: isTablet ? 26 : 22,
    tintColor: "#777",
  },

  button: {
    backgroundColor: "#2B1B14",
    paddingVertical: isTablet ? 18 : 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "600",
    letterSpacing: 1,
  },

  /* ===== MODAL ===== */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: isTablet ? "60%" : "80%",
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: isTablet ? 40 : 30,
    alignItems: "center",
  },

  successIcon: {
    width: isTablet ? 80 : 60,
    height: isTablet ? 80 : 60,
    marginBottom: 20,
  },

  modalTitle: {
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  modalSub: {
    fontSize: isTablet ? 15 : 13,
    color: "#777",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: isTablet ? 22 : 18,
  },

  modalButton: {
    backgroundColor: "#2B1B14",
    paddingVertical: isTablet ? 16 : 12,
    paddingHorizontal: isTablet ? 40 : 30,
    borderRadius: 26,
  },

  modalButtonText: {
    color: "#fff",
    fontSize: isTablet ? 16 : 14,
    fontWeight: "500",
  },
});
