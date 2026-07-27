import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { feed } from "../../../../data/dummyData";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const event = feed.find((e) => e.id === id);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Event not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.description}>{event.description}</Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>← Back to Feed</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
  date: { fontSize: 13, color: "#666", marginBottom: 12 },
  description: { fontSize: 15, lineHeight: 22 },
  button: { marginTop: 24 },
  buttonText: { color: "#2563eb", fontSize: 15, fontWeight: "600" },
});
