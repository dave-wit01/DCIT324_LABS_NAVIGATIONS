import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";
import { useProfile } from "../contexts/ProfileContext";

export default function EditProfileScreen() {
  const { profile, setProfile } = useProfile();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [programme, setProgramme] = useState(profile.programme);

  const handleSave = () => {
    setProfile((prev) => ({ ...prev, name, bio, programme }));
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Bio</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} multiline />

      <Text style={styles.label}>Programme</Text>
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 14, fontWeight: "600", marginTop: 12, marginBottom: 4 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 10, fontSize: 16 },
  button: { backgroundColor: "#2563eb", paddingVertical: 12, borderRadius: 8, marginTop: 24, alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});
