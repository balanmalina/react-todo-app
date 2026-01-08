import "./TodoItem.css";

function TodoItem({ input, setInput, onButton }) {
  return (
    <div className="todoitem">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button className="add-button" onClick={onButton}>Add</button>
    </div>
  );
}

export default TodoItem;