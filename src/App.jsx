import Heading from "./Components/Heading";
import AddTodo from "./Components/AddTodo";
import ToDo from "./Components/ToDo";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (name, date) => {
    const newTodoitems = [...todoItems, { name: name, date: date }];
    setTodoItems(newTodoitems);
  };

  const handleDeleteItem = (name) => {
    // logic for delete an item - filter method
    const newTodoitems = todoItems.filter((item) => item.name !== name);
    setTodoItems(newTodoitems);
  };

  return (
    <>
      <center className="todo-center">
        <Heading />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <ToDo todoItems={todoItems} onDeleteItem={handleDeleteItem}></ToDo>
      </center>
    </>
  );
}

export default App;
