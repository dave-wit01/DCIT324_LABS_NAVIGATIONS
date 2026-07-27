import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>Your one-stop app for campus life</Text>
      <Pressable style={styles.button} onPress={() => router.replace("/(drawer)/(tabs)/home")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 24 },
  button: { backgroundColor: "#2563eb", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});
