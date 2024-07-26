import { useState, useRef } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // -------------------------useRef------------------------
  const todoName = useRef();
  const todoDate = useRef();

  // -----------Modified code-contains form+useRef+useState------------
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const finalTodoName = todoName.current.value;
    const finalTodoDate = todoDate.current.value;
    todoName.current.value = "";
    todoDate.current.value = "";
    onNewItem(finalTodoName, finalTodoDate);
    // --------useState ------
    /* setName("");
     setDate("");*/
  };

  return (
    <div className="container">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            // --------useState ------
            /* value={name}
             onChange={handleNameChange}*/
            ref={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // --------useState ------
            /*onChange={handleDateChange} value={date}*/
            ref={todoDate}
          />
        </div>
        <div className="col-2">
          <button
            // if button type is not defined then by default typeof button is submit
            // type="button"
            className="btn btn-success"
            // --------form-------
            // onClick={handleAddButtonClicked}
          >
            <MdOutlinePlaylistAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
