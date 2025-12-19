import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const BottamProfileScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safe}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* USER INFO */}
      <View style={styles.userRow}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Sunie Pham</Text>
          <Text style={styles.email}>sunieux@gmail.com</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.settingIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <ProfileItem title="Address" icon="📍" onPress={() => {}} />
        <ProfileItem title="Payment method" icon="💳" onPress={() => {}} />
        <ProfileItem title="Voucher" icon="🎟️" onPress={() => {}} />
        <ProfileItem title="My Wishlist" icon="❤️" onPress={() => {}} />
        <ProfileItem title="Rate this app" icon="⭐" onPress={() => {}} />
        <ProfileItem title="Log out" icon="🚪" isLast onPress={() => {navigation.navigate("Signin")}} />
      </View>
    </SafeAreaView>
  );
};

export default BottamProfileScreen;

//
// ✅ REUSABLE ROW COMPONENT
//
const ProfileItem = ({
  icon,
  title,
  onPress,
  isLast = false,
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.row, !isLast && styles.border]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.rowLeft}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.rowText}>{title}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

//
// 🎨 RESPONSIVE STYLES
//
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 20 : 16,
  },

  menu: {
    fontSize: isTablet ? 26 : 22,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  /* USER */
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 28 : 20,
  },

  avatar: {
    width: isTablet ? 70 : 54,
    height: isTablet ? 70 : 54,
    borderRadius: isTablet ? 35 : 27,
    marginRight: 14,
  },

  name: {
    fontSize: isTablet ? 18 : 16,
    fontWeight: "600",
  },

  email: {
    fontSize: isTablet ? 14 : 13,
    color: "#777",
    marginTop: 2,
  },

  settingIcon: {
    fontSize: isTablet ? 22 : 18,
  },

  /* CARD */
  card: {
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 6,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 20 : 16,
  },

  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  icon: {
    fontSize: isTablet ? 20 : 18,
  },

  rowText: {
    fontSize: isTablet ? 17 : 15,
    color: "#000",
  },

  arrow: {
    fontSize: isTablet ? 22 : 20,
    color: "#B0B0B0",
  },
});
