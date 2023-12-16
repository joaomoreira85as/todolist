import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";

type Props = {
  addTask: (description: string) => void;
};
export function Header({ addTask }: Props) {
  const [description, setDescription] = useState<string>("");
  const handleTaskAdd = () => {
    addTask(description);
    setDescription("");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <MaterialIcons style={styles.buttonText} name="add-circle-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
