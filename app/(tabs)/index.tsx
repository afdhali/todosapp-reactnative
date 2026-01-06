import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Mantap Jiwa</Text>
      <Text style={styles.content}>Haha</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    gap: 10,
  },
  content: {
    fontSize: 30,
  },
});
