import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const notifications = [
  {
    id: "1",
    title: "Good morning! Get 20% Voucher",
    desc: "Summer sale up to 20% off. Limited voucher.\nGet now!! 😜",
  },
  {
    id: "2",
    title: "Special offer just for you",
    desc: "New Autumn Collection 30% off",
  },
  {
    id: "3",
    title: "Holiday sale 50%",
    desc: "Tap here to get 50% voucher.",
  },
];

const NotificationScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notification</Text>

        <View style={{ width: 36 }} />
      </View>

      {/* LIST */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 20 : 12,
  },

  backBtn: {
    width: isTablet ? 44 : 36,
    height: isTablet ? 44 : 36,
    borderRadius: isTablet ? 22 : 18,
    backgroundColor: "#F4F4F4",
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

  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: isTablet ? 20 : 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  cardTitle: {
    fontSize: isTablet ? 17 : 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#000",
  },

  cardDesc: {
    fontSize: isTablet ? 15 : 13,
    color: "#7A7A7A",
    lineHeight: isTablet ? 22 : 18,
  },
});
