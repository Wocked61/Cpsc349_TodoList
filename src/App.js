import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (editIndex != null) {
      const updateTasks = tasks.map((task, id) =>
        id === editIndex ? input : tasks
      );
      setTasks(updateTasks);
      setEditIndex(null);
      setInput("");
    } else {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(tasks[index]);
  };

  const handleDel = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(tasks, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {tasks.map((task, index) => (
        <div key={index}>
          <p>{task}</p>
          <button onClick={() => handleEdit(index)}>edit</button>
          <button onClick={() => handleDel(index)}> delete</button>
        </div>
      ))}
    </div>
  );
}
