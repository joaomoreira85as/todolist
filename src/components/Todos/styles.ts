import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
    padding: 26,
    flex: 6,
    width: "100%",
  },
  containerItem: {
    alignItems: "center",
    maxWidth: "100%",
    flexDirection: "row",
    borderRadius: 6,
    borderColor: "#333",
    backgroundColor: "#262626",
    marginBottom: 10,
    height: 66,
    columnGap: 6,
    padding: 16,
  },
  containerFlatList: {
    width: "100%",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  createdTask: {
    color: "#fff",
  },
  buttonText: {
    color: "#808080",
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 6,
    backgroundColor: "transparent",
  },
});
