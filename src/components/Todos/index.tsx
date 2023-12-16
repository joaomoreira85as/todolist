import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../types/task";
import RadioButton from "../RadioButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EmptyCard } from "../EmptyCard";

type Props = {
  data: Task[];
  toggleStatus: (taskId: number) => void;
  removeItem: (taskId: number) => void;
};

export function Todos({ data, toggleStatus, removeItem }: Props) {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.containerItem}>
      <RadioButton
        checked={item.completed}
        onPress={() => toggleStatus(item.id)}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={item.completed ? styles.completedTask : styles.createdTask}
        >
          {item.description}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeItem(item.id)}
      >
        <MaterialCommunityIcons
          style={styles.buttonText}
          name="trash-can-outline"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerFlatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyCard />}
      />
    </View>
  );
}
