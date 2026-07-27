import { View, Text, FlatList, StyleSheet } from "react-native";
import { announcements } from "../../data/dummyData";

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Announcements</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { marginBottom: 16, borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 8 },
  title: { fontSize: 16, fontWeight: "600" },
  date: { fontSize: 12, color: "#666", marginBottom: 4 },
  text: { fontSize: 14 },
});
