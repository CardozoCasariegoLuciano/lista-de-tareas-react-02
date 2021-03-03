import React, { useState, useEffect } from "react";
import { TaskRow } from "./componentes/TaskRow";
import { TaskBanner } from "./componentes/TaskBanner";
import { TaskCreator } from "./componentes/TaskCreator";
import VisibilityControl from "./componentes/VisibilityControl";

function App() {
  const [userName, setUserName] = useState("Luciano");
  const [taskItems, setTaskItems] = useState([]);
  const [showComplited, setSwohComplited] = useState(false);

  useEffect(() => {

    let data = localStorage.getItem("tasks");

    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setSwohComplited();
      setUserName();
      setTaskItems();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName.name)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toogleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const taskTableRows = (doneValue) => {
    return taskItems
      .filter((e) => e.done === doneValue)
      .map((elem) => (
        <TaskRow item={elem} key={elem.name} toogleTask={toogleTask} />
      ));
  };

  return (
    <div className="App">
      <TaskBanner userName={userName} taskItem={taskItems} />
      <TaskCreator callback={createNewTask} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>

      <div className="bg-secondary text-white text-center p-2">
        <VisibilityControl
          description="Tareas completadas"
          isChecked={showComplited}
          callback={(checked) => setSwohComplited(checked)}
        />
      </div>

      {showComplited && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(true)}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
