import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    paddingTop: 66,
    paddingBottom: 50,
    padding: 26,
    flex: 1,
    position: "relative",
    marginBottom: 40,
  },
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#FDFCFE",
    fontSize: 16,
    borderColor: "#5E60CE",
    borderWidth: 1,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 23,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
  },
  form: {
    width: "100%",
    bottom: -25,
    flexDirection: "row",
    columnGap: 7,
    position: "absolute",
  },
  image: {
    marginBottom: 200,
  },
});
