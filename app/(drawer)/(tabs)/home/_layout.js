import { Stack } from "expo-router";

// Nested Stack Navigator (lives inside the "Home" tab)
// ├── index (Feed)
// └── [id]  (EventDetails)
export default function HomeStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Feed" }} />
      <Stack.Screen name="[id]" options={{ title: "Event Details" }} />
    </Stack>
  );
}
