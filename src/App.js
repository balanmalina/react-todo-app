import { useState } from "react";
import TodoItem from "./components/TodoItem";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [dark, setDark] = useState(false);

  const addItem = () => {
    if (input === "") return;

    setItems(prev => [
      ...prev,
      { text: input, completed: false }
    ]);

    setInput("");
  };

  function deleteItem(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  function toggleCompleted(index) {
    const newItems = items.map((item, i) =>
      i === index
        ? { ...item, completed: !item.completed }
        : item
    );

    setItems(newItems);
  }

  return (
      <div className={dark ? "app dark" : "app"}>
        <h1 className="title">Todo App</h1>
        <div className="header">
      <ThemeToggle dark={dark} setDark={setDark} />
      </div>

      <TodoItem
        input={input}
        setInput={setInput}
        onButton={addItem}
      />

      <ul className="todo-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={item.completed ? "todo completed" : "todo"}
          >
            <input
              type="checkbox"
               className="todo-checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(index)}
            />

            <span>{item.text}</span>

            <button className="btn-delete" onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
