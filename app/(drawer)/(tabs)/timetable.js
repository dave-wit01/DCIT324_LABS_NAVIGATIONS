import { View, Text, FlatList, StyleSheet } from "react-native";
import { timetable } from "../../../data/dummyData";

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.day}>{item.day} · {item.time}</Text>
            <Text style={styles.detail}>{item.course} — {item.venue}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { marginBottom: 12, borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 8 },
  day: { fontSize: 15, fontWeight: "600" },
  detail: { fontSize: 13, color: "#666" },
});
