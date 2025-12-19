import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

/* ================= SCREEN ================= */

const SidebarHomeScreen = () => {
  const navigation = useNavigation<any>();
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.inner}>

        {/* PROFILE */}
        <View style={styles.profile}>
          <View style={styles.avatar} />
          <Text style={[styles.name, { color: theme.text }]}>
            Sunie Pham
          </Text>
          <Text style={[styles.email, { color: theme.subText }]}>
            suniexx@gmail.com
          </Text>
        </View>

        {/* MAIN MENU */}
        <SidebarButton
          title="Homepage"
          active
          theme={theme}
          onPress={() => navigation.navigate("Home")}
        />

        <SidebarButton
          title="Discover"
          theme={theme}
          onPress={() => navigation.navigate("SideMenuScreen")}
        />

        <SidebarButton
          title="My Order"
          theme={theme}
          onPress={() => navigation.navigate("SideMenuScreen")}
        />

        <SidebarButton
          title="My Profile"
          theme={theme}
          onPress={() => navigation.navigate("SideMenuScreen")}
        />

        {/* OTHER */}
        <Text style={[styles.otherTitle, { color: theme.subText }]}>
          OTHER
        </Text>

        <SidebarButton
          title="Setting"
          theme={theme}
          onPress={() => navigation.navigate("Setting")}
        />

        <SidebarButton
          title="Support"
          theme={theme}
          onPress={() => navigation.navigate("SideMenuScreen")}
        />

        <SidebarButton
          title="About us"
          theme={theme}
          onPress={() => navigation.navigate("SideMenuScreen")}
        />

        {/* LIGHT / DARK TOGGLE */}
        <View style={styles.toggleWrapper}>
          <ThemeButton
            label="☀ Light"
            active={themeMode === "light"}
            onPress={() => setThemeMode("light")}
          />
          <ThemeButton
            label="🌙 Dark"
            active={themeMode === "dark"}
            onPress={() => setThemeMode("dark")}
          />
        </View>

      </View>
    </View>
  );
};

export default SidebarHomeScreen;

/* ================= COMPONENTS ================= */

const SidebarButton = ({
  title,
  active,
  theme,
  onPress,
}: {
  title: string;
  active?: boolean;
  theme: any;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.menuItem,
        active && { backgroundColor: theme.activeBg },
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text
        style={[
          styles.menuText,
          { color: active ? theme.activeText : theme.menuText },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const ThemeButton = ({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.toggleBtn,
        active && styles.toggleActive,
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text
        style={[
          styles.toggleText,
          active && styles.toggleTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

/* ================= RESPONSIVE STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inner: {
    width: "100%",
    maxWidth: isTablet ? 380 : 320,
    alignSelf: "center",
    paddingHorizontal: isTablet ? 24 : 16,
    paddingTop: isTablet ? 40 : 30,
    paddingBottom: 16,
  },

  profile: {
    alignItems: "center",
    marginBottom: isTablet ? 36 : 28,
  },

  avatar: {
    width: isTablet ? 72 : 56,
    height: isTablet ? 72 : 56,
    borderRadius: isTablet ? 36 : 28,
    backgroundColor: "#D9D9D9",
    marginBottom: 12,
  },

  name: {
    fontSize: isTablet ? 18 : 15,
    fontWeight: "600",
  },

  email: {
    fontSize: isTablet ? 14 : 12,
    marginTop: 4,
  },

  menuItem: {
    height: isTablet ? 52 : 44,
    borderRadius: 14,
    justifyContent: "center",
    paddingHorizontal: isTablet ? 18 : 14,
    marginBottom: 8,
  },

  menuText: {
    fontSize: isTablet ? 16 : 14,
    fontWeight: "500",
  },

  otherTitle: {
    fontSize: isTablet ? 12 : 11,
    letterSpacing: 1,
    marginVertical: isTablet ? 16 : 12,
  },

  toggleWrapper: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    padding: 4,
    marginTop: isTablet ? 32 : 24,
  },

  toggleBtn: {
    flex: 1,
    paddingVertical: isTablet ? 12 : 8,
    borderRadius: 24,
    alignItems: "center",
  },

  toggleActive: {
    backgroundColor: "#FFFFFF",
  },

  toggleText: {
    fontSize: isTablet ? 15 : 13,
    color: "#666",
    fontWeight: "500",
  },

  toggleTextActive: {
    color: "#000",
    fontWeight: "600",
  },
});

/* ================= THEMES ================= */

const lightTheme = {
  bg: "#FFFFFF",
  text: "#000000",
  subText: "#8E8E93",
  menuText: "#6E6E73",
  activeBg: "#F2F2F7",
  activeText: "#000000",
};

const darkTheme = {
  bg: "#121212",
  text: "#FFFFFF",
  subText: "#9A9A9A",
  menuText: "#C7C7CC",
  activeBg: "#1E1E1E",
  activeText: "#FFFFFF",
};
