import "./Column.css";
import Task from "./Task";

import { useStore } from "../store";
import { useState } from "react";

export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const task = useStore(store => store.tasks);
  const filteredTask = task.filter(t => t.state === state);

  const addTask = useStore(store => store.addTask);
  const draggedTask = useStore(store => store.draggedTask);
  const setDraggedTask = useStore(store => store.setDraggedTask);
  const moveTask = useStore(store => store.moveTask);

  return (
    <div
      className={`column ${drop && "drop"}`}
      onDragOver={e => {
        e.preventDefault();
        setDrop(true);
      }}
      onDragLeave={e => {
        e.preventDefault();
        setDrop(false);
      }}
      onDrop={() => {
        moveTask(draggedTask, state);
        setDrop(false);
        setDraggedTask(null);
      }}
    >
      <div className="title-wrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {filteredTask.map(task => (
        <Task key={task.title} title={task.title} />
      ))}
      {open && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              onChange={e => setText(e.target.value)}
              value={text}
            />

            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
