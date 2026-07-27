import { View, Text, FlatList, StyleSheet } from "react-native";
import { faqs } from "../../data/dummyData";

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help & Support</Text>
      <FlatList
        data={faqs}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.question}>Q: {item.question}</Text>
            <Text style={styles.answer}>A: {item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { marginBottom: 16 },
  question: { fontSize: 15, fontWeight: "600", marginBottom: 4 },
  answer: { fontSize: 14, color: "#333" },
});
