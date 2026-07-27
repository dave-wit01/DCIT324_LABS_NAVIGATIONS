import { Stack } from "expo-router";
import { ProfileProvider } from "../contexts/ProfileContext";

// Root Stack Navigator
// ├── welcome        (entry screen)
// ├── (drawer)        -> renders the Drawer Navigator ("Main")
// └── edit-profile    (pushed on top of everything)
export default function RootLayout() {
  return (
    <ProfileProvider>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ title: "Welcome", headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="edit-profile"
          options={{ title: "Edit Profile", presentation: "card" }}
        />
      </Stack>
    </ProfileProvider>
  );
}
