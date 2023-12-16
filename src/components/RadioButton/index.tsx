import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  checked: boolean;
  onPress: () => void;
};

function RadioButton({ checked, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={checked ? styles.radioButtonChecked : styles.radioButtonUnChecked}
    >
      {checked ? <MaterialIcons name="check" size={12} color="white" /> : null}
    </TouchableOpacity>
  );
}

export default RadioButton;
