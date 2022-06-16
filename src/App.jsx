import React from "react";
import "./App.css";

const App = () => {
  const [listItem, setListItem] = useState("");
  const [todo, setTodo] = useState([
    { isIncomplete: "5km bike ride", isComplete: true },
    { isIncomplete: "Fix door handle", isComplete: false },
    { isIncomplete: "Complete maths assignment", isComplete: true },
    { isIncomplete: "Buy fruit", isComplete: false },
    { isIncomplete: "Pick up kids from swimming lesson", isComplete: false },
  ]);

const newListItem = (listItem) => {
    let arr = [...todo];
    arr.push({
      isIncomplete: listItem,
      isCompleted: false
    });
    setTodo(arr);
  }

  const completeListItem = (i) => {
    let arr = [...todo];
    arr[i].isCompleted = !arr[i].isCompleted;
    setTodo(arr);
  }

  const deleteListItem = (i) => {
    let arr = [...todo];
    arr.splice(i, 1);
    setTodo(arr);
  }

return (
  <div></div>
)








};

export default App;
