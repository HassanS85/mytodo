import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [listItem, setListItem] = useState("");
  const [todo, setTodo] = useState([
    { isIncomplete: "5km bike ride", isCompleted: true },
    { isIncomplete: "Fix door handle", isCompleted: false },
    { isIncomplete: "Complete maths assignment", isCompleted: true },
    { isIncomplete: "Buy fruit", isCompleted: false },
    { isIncomplete: "Pick up kids from swimming lesson", isCompleted: false },
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

  const handleClick = (event) => {
    setListItem(event.target.value);
  };


  return (
    <div>
      <input
        className="todo-input"
        value={listItem}
        onClick={(handleClick)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            newListItem(listItem);
            setListItem("");
          }
        }}
      />
      
}



export default App;
