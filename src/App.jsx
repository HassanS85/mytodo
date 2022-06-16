import React from "react";
import "./App.css";

const App = () => {
  const [listItem, setListItem] = useState("");
  const [todo, setTodo] = useState([
    { incomplete: "5km bike ride", isComplete: true },
    { incomplete: "Fix door handle", isComplete: false },
    { incomplete: "Complete maths assignment", isComplete: true },
    { incomplete: "Buy fruit", isComplete: false },
    { incomplete: "Pick up kids from swimming lesson", isComplete: false },
  ]);

const newListItem = (listItem) => {
    let arr = [...todo];
    arr.push({
      incomplete: listItem,
      isCompleted: false
    });
    setTodo(todosArray);
  }

};

export default App;
