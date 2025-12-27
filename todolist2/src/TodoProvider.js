 import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: text,
        completed: false
      }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;