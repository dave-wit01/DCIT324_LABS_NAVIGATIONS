import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useProfile } from "../../../contexts/ProfileContext";

export default function ProfileScreen() {
  const { profile } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.row}>Name: {profile.name}</Text>
      <Text style={styles.row}>Index Number: {profile.indexNumber}</Text>
      <Text style={styles.row}>Programme: {profile.programme}</Text>
      <Text style={styles.row}>Level: {profile.level}</Text>
      <Text style={styles.row}>Bio: {profile.bio}</Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/edit-profile",
          })
        }
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  row: { fontSize: 15, marginBottom: 8 },
  button: { backgroundColor: "#2563eb", paddingVertical: 12, borderRadius: 8, marginTop: 16, alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});
