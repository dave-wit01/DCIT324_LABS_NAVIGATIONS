import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Drawer Navigator (rendered inside root "Main" route)
// ├── (tabs)   -> "Dashboard" - renders the Bottom Tab Navigator (default screen)
// ├── announcements
// ├── about
// └── help
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="(tabs)"
          options={{ drawerLabel: "Dashboard", title: "Dashboard" }}
        />
        <Drawer.Screen
          name="announcements"
          options={{ drawerLabel: "Announcements", title: "Announcements" }}
        />
        <Drawer.Screen name="about" options={{ drawerLabel: "About", title: "About" }} />
        <Drawer.Screen
          name="help"
          options={{ drawerLabel: "Help & Support", title: "Help & Support" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
