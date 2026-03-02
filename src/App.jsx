import { useState } from "react";

import logo from "./assets/logo.png";

import List from "./components/List";
import Button from "./components/Button";
import Container from "./components/Container";

import { dummyTasks, doneTasks, pendingTasks } from "./data/dummyTasks.js";

// const listItems = ["List item 1", "List item 2", "List item 3", "List Item 4", "List Item 5"];

// function showCompleted() {
//   console.log("Tasks complete");
// }

// function showPending() {
//   console.log("Tasks da completare");
// }

function App() {
  const [tasks, setTasks] = useState(dummyTasks);

  function showStatus(status) {
    if (status === "done") {
      setTasks(doneTasks);
    } else if (status === "pending") {
      setTasks(pendingTasks);
    } else {
      setTasks(dummyTasks);
    }
  }

  return (
    <div>
      <header>
        <div className="container">
          <img src={logo} alt="Logo della mia app" />
          <h1>Cosa devo fare oggi?</h1>
        </div>
      </header>
      <Container>
        <div className="filter">
          <Button title="Tutte" classes="btn-secondary" handleClick={() => showStatus("all")} />
          <Button title="Completate" classes="btn-primary" handleClick={() => showStatus("done")} />
          <Button title="Da completare" classes="btn-secondary" handleClick={() => showStatus("pending")} />
        </div>
      </Container>

      <div className="container">
        <List listElements={tasks} />
        {/* {status === "done" ? <List listElements={doneTasks} /> : <List listElements={pendingTasks} />} */}
      </div>
    </div>
  );
}

export default App;
