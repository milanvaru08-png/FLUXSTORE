import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrders } from "../context/OrderContext";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const tabs = ["Pending", "Delivered", "Cancelled"] as const;

const MyOrdersScreen = ({ navigation }: any) => {
  const { orders } = useOrders();
  const [activeTab, setActiveTab] =
    useState<typeof tabs[number]>("Pending");

  const filteredOrders = orders.filter(
    (o) => o.status === activeTab
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer?.()}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.title}>My Orders</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NotificationScreen")}>
        <Text style={styles.bell}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabBtn,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ORDER LIST */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>No orders</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.orderId}>
                Order #{item.id.slice(-4)}
              </Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            <Text style={styles.sub}>
              Items: {item.items.length}
            </Text>

            <View style={styles.rowBetween}>
              <Text
                style={[
                  styles.status,
                  item.status === "Pending" && styles.pending,
                  item.status === "Delivered" && styles.delivered,
                  item.status === "Cancelled" && styles.cancelled,
                ]}
              >
                {item.status.toUpperCase()}
              </Text>

              <TouchableOpacity style={styles.detailsBtn}>
                <Text style={styles.detailsText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MyOrdersScreen;

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: isTablet ? 22 : 16,
  },

  menu: {
    fontSize: isTablet ? 28 : 22,
  },

  bell: {
    fontSize: isTablet ? 22 : 18,
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: isTablet ? 22 : 18,
    fontWeight: "600",
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: isTablet ? 16 : 10,
    marginBottom: 12,
  },

  tabBtn: {
    paddingHorizontal: isTablet ? 24 : 16,
    paddingVertical: isTablet ? 10 : 6,
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
  },

  activeTab: {
    backgroundColor: "#333",
  },

  tabText: {
    fontSize: isTablet ? 15 : 13,
    color: "#555",
  },

  activeText: {
    color: "#fff",
  },

  listContent: {
    padding: 16,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: isTablet ? 18 : 14,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderId: {
    fontWeight: "600",
    fontSize: isTablet ? 16 : 14,
  },

  date: {
    fontSize: isTablet ? 13 : 12,
    color: "#999",
  },

  sub: {
    marginVertical: 6,
    color: "#666",
    fontSize: isTablet ? 15 : 13,
  },

  status: {
    fontWeight: "600",
    fontSize: isTablet ? 14 : 12,
  },

  pending: {
    color: "#FF9800",
  },

  delivered: {
    color: "#4CAF50",
  },

  cancelled: {
    color: "#E53935",
  },

  detailsBtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: isTablet ? 18 : 14,
    paddingVertical: isTablet ? 6 : 4,
  },

  detailsText: {
    fontSize: isTablet ? 14 : 12,
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#999",
    fontSize: isTablet ? 16 : 14,
  },
});
