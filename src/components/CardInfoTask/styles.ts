import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
  },

  containerNumber: {
    backgroundColor: "#333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textNumber: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});
