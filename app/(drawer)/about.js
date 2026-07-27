import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Connect</Text>
      <Text style={styles.description}>
        A simple app to help students access announcements, courses, timetables, and campus news
        all in one place.
      </Text>
      <Text style={styles.meta}>Built by: David Dzidzinyo</Text>
      <Text style={styles.meta}>Student ID: 22200278</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  appName: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  description: { fontSize: 14, marginBottom: 16 },
  meta: { fontSize: 14, marginBottom: 4 },
});
