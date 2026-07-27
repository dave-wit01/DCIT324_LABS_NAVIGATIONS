import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { feed } from "../../../../data/dummyData";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Campus Feed</Text>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => router.push(`/(drawer)/(tabs)/home/${item.id}`)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { marginBottom: 14, borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 8 },
  title: { fontSize: 16, fontWeight: "600" },
  date: { fontSize: 12, color: "#666" },
});
