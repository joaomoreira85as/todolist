import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  value?: number;
  color?: "light" | "dark";
};
export function CardInfoTask({ title, value = 0, color = "light" }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          { color: color === "light" ? "#4EA8DE" : "#5E60CE" },
          styles.title,
        ]}
      >
        {title}
      </Text>
      <View style={styles.containerNumber}>
        <Text style={styles.textNumber}>{value}</Text>
      </View>
    </View>
  );
}
