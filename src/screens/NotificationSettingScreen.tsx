import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  StatusBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const NotificationSettingScreen = () => {
  const navigation = useNavigation<any>();

  const [showNotifications, setShowNotifications] = useState(true);
  const [notificationSound, setNotificationSound] = useState(true);
  const [lockScreenNotification, setLockScreenNotification] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notification</Text>

        <View style={{ width: isTablet ? 44 : 36 }} />
      </View>

      {/* CONTENT */}
      <View style={styles.list}>
        <SettingToggle
          title="Show notifications"
          description="Receive push notifications for new messages"
          value={showNotifications}
          onChange={setShowNotifications}
        />

        <SettingToggle
          title="Notification sounds"
          description="Play sound for new messages"
          value={notificationSound}
          onChange={setNotificationSound}
        />

        <SettingToggle
          title="Lock screen notifications"
          description="Allow notification on the lock screen"
          value={lockScreenNotification}
          onChange={setLockScreenNotification}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationSettingScreen;

/* ================= TOGGLE ROW ================= */

const SettingToggle = ({
  title,
  description,
  value,
  onChange,
}: {
  title: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.textWrapper}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowDesc}>{description}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#D1D1D6", true: "#4E8D7C" }}
        thumbColor="#FFFFFF"
      />
    </View>
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
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 20 : 14,
  },

  backBtn: {
    width: isTablet ? 44 : 36,
    height: isTablet ? 44 : 36,
    borderRadius: isTablet ? 22 : 18,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  backIcon: {
    fontSize: isTablet ? 32 : 26,
    color: "#000",
    marginTop: -2,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
    color: "#000",
  },

  /* LIST */
  list: {
    paddingHorizontal: 16,
    paddingTop: isTablet ? 20 : 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: isTablet ? 24 : 18,
  },

  textWrapper: {
    flex: 1,
    paddingRight: 12,
  },

  rowTitle: {
    fontSize: isTablet ? 17 : 15,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },

  rowDesc: {
    fontSize: isTablet ? 15 : 13,
    color: "#8E8E93",
    lineHeight: isTablet ? 22 : 18,
  },
});
