import { useState } from "react";
import { Alert, View } from "react-native";
import { Header } from "../../components/Header";
import { Todos } from "../../components/Todos";
import { styles } from "./styles";
import { CardInfoTasks } from "../../components/CardInfoTasks";
import { Task } from "../../types/task";
export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskAdd = (description = "") => {
    const descriptionToAdd = description.trim();
    if (!descriptionToAdd) {
      return Alert.alert("Atenção", "Insira uma descrição antes de adicionar!");
    }
    const id = tasks.length + 1;
    const task: Task = { id, description, completed: false };
    setTasks((prevState) => [...prevState, task]);
  };

  const handleToggleStatusTask = (taskId: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    const updatedTasks = [...tasks];

    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      completed: !updatedTasks[taskIndex].completed,
    };

    setTasks(updatedTasks);
  };

  const getNumberTasksByStatus = (completed: boolean): number => {
    return tasks.filter((task) => task.completed === completed).length;
  };

  const handleRemoveTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);
    return Alert.alert(
      "Atenção!",
      `Deseja remover a tarefa ${task?.description}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTasks((prevState) => prevState.filter((task) => task.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header addTask={handleTaskAdd} />
      <CardInfoTasks
        completed={getNumberTasksByStatus(true)}
        created={getNumberTasksByStatus(false)}
      />
      <Todos
        data={tasks}
        toggleStatus={handleToggleStatusTask}
        removeItem={handleRemoveTask}
      />
    </View>
  );
}
