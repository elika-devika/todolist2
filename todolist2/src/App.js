import { useState } from "react";

function App() {
  // Default tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false }
  ]);

  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: text,
        completed: false
      }
    ]);
    setText("");
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

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {/* Navbar */}
      <div style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "20px" }}>Home</span>
        <span>About</span>
      </div>

      {/* Box */}
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "320px"
        }}
      >
        <h3>Enter the task</h3>

        <form onSubmit={addTask}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <button type="submit">add</button>
        </form>

        {/* ✅ Task list with checkboxes only */}
        <div style={{ marginTop: "15px" }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px"
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span style={{ marginLeft: "8px" }}>
                {task.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;