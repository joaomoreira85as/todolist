import { View } from "react-native";
import { styles } from "./styles";
import { CardInfoTask } from "../CardInfoTask";

type Props = {
  created?: number;
  completed?: number;
};

export function CardInfoTasks({ created, completed }: Props) {
  return (
    <View style={styles.container}>
      <CardInfoTask title="Criadas" value={created} />
      <CardInfoTask title="Concluídas" value={completed} color="dark" />
    </View>
  );
}
