import { View, Text, FlatList, StyleSheet } from "react-native";
import { courses } from "../../../data/dummyData";

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.code}>{item.code} - {item.title}</Text>
            <Text style={styles.credits}>{item.credits} credit hours</Text>
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
  code: { fontSize: 15, fontWeight: "600" },
  credits: { fontSize: 13, color: "#666" },
});
