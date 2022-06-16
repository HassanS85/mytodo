import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [listItem, setListItem] = useState("to do list");
  const [todo, setTodo] = useState([
    { isIncomplete: "5km bike ride", isCompleted: true },
    { isIncomplete: "Fix door handle", isCompleted: false },
    { isIncomplete: "Complete maths assignment", isCompleted: true },
    { isIncomplete: "Buy fruit", isCompleted: false },
    { isIncomplete: "Pick up kids from swimming lesson", isCompleted: false },
  ]);
//define newlistitem with deep copy of arr. add to end of array with push
//of new object and bool value
  const newListItem = (listItem) => {
    let arr = [...todo];
    arr.push({
      isIncomplete: listItem,
      isCompleted: false,
    });
    setTodo(arr);
  };
//isCompleted needs to e set to opposite to what it was before.
  const completeListItem = (i) => {
    let arr = [...todo];
    arr[i].isCompleted = !arr[i].isCompleted;
    setTodo(arr);
  };


  //splice function to remove the todo at the start of the index
  const deleteListItem = (i) => {
    let arr = [...todo];
    arr.splice(i, 1);
    setTodo(arr);
  };

  //click function for when box list is selected.
  const handleClick = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <input
        className="todo__container"
        value={listItem}
        onChange={(event) => {
          this.setListItem({ listItem: event.target.value });
        }}
        onClick={(event) => {
          if (event.key === "Enter") {
            newListItem(listItem);
            setListItem("");
          }
        }}
      /> 
      {todo.map((todo, index) => (
        <div className="todo__checklist__container">
          <div
            className="todo__checkbox__container"
            onClick={() => completeListItem(index)}
          >
            {todo.isCompleted && <div>To do List Items</div>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div
            className="todo__checkbox__delete"
            onClick={() => deleteListItem(index)}
          ></div>
        </div>
      ))}
      {todo.length > 0 && `${todo.length} incomplete items in this list.`}
    </div>
  );
};

export default App;
