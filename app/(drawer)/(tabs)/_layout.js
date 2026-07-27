import { Tabs } from "expo-router";

// Bottom Tab Navigator (lives inside "Dashboard" drawer screen)
// ├── home         -> renders the nested Stack (Feed -> EventDetails)
// ├── courses
// ├── timetable
// └── profile
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="courses" options={{ title: "Courses" }} />
      <Tabs.Screen name="timetable" options={{ title: "Timetable" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
