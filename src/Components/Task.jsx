import { useStore } from "../store";
import "./Task.css";
import trash from "../assets/delete.png";

export default function Task({ title }) {
  const task = useStore(store =>
    store.tasks.find(task => task.title === title)
  );

  const setDraggedTask = useStore(store => store.setDraggedTask);
  const deleteTask = useStore(store => store.deleteTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div>
          <img
            src={trash}
            alt="trash icon"
            className="trash-icon"
            onClick={() => deleteTask(task.title)}
          />
        </div>
        <div className={`status ${task.state}`}>{task.state}</div>
      </div>
    </div>
  );
}
