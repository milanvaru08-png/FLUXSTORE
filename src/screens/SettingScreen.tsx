import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const SettingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.openDrawer?.()}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Setting</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* LIST */}
      <View style={styles.list}>
        <SettingButton
          icon="🌐"
          title="Language"
          onPress={() => navigation.navigate("Setting")}
        />

        <SettingButton
          icon="🔔"
          title="Notification"
          onPress={() => navigation.navigate("NotificationSettingScreen")}
        />

        <SettingButton
          icon="📄"
          title="Terms of Use"
          onPress={() => navigation.navigate("Setting")}
        />

        <SettingButton
          icon="ℹ️"
          title="Privacy Policy"
          onPress={() => navigation.navigate("Setting")}
        />

        <SettingButton
          icon="✈️"
          title="Chat support"
          onPress={() => navigation.navigate("Setting")}
          hideBorder
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

/* ================= BUTTON ================= */

const SettingButton = ({
  icon,
  title,
  onPress,
  hideBorder,
}: {
  icon: string;
  title: string;
  onPress: () => void;
  hideBorder?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.row,
        hideBorder && { borderBottomWidth: 0 },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.left}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: isTablet ? 24 : 16,
    paddingVertical: isTablet ? 20 : 14,
  },

  menuBtn: {
    width: isTablet ? 44 : 32,
    height: isTablet ? 44 : 32,
    justifyContent: "center",
    alignItems: "center",
  },

  menuIcon: {
    fontSize: isTablet ? 26 : 22,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  /* LIST */
  list: {
    marginTop: isTablet ? 20 : 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: isTablet ? 24 : 16,
    paddingVertical: isTablet ? 22 : 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  icon: {
    fontSize: isTablet ? 22 : 18,
  },

  title: {
    fontSize: isTablet ? 17 : 15,
    color: "#000",
  },

  arrow: {
    fontSize: isTablet ? 26 : 22,
    color: "#B0B0B0",
  },
});
