import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./AddToDoComponent.css";
import { ToDoContext } from "../../Context/ToDoContext";

export default function AddToDoComponent() {
    const {todoList, setTodoList, todoListMaxID, setToDoListMaxID} = useContext(ToDoContext);
    const [todoTitle, setTodoTitle] =  useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const navigate = useNavigate();

    function handleTitle(event) {
        setTodoTitle(event.target.value);
    }

    function handleDescription(event) {
        setTodoDescription(event.target.value);
    }

    function handleCancleTodo() {
        setTodoTitle("");
        setTodoDescription("");
    }
    
    function handleAddTodo() {
       let addTodo;
       setToDoListMaxID(todoListMaxID + 1);
       addTodo = {
          id: todoListMaxID + 1,
          name: todoTitle,
          summary: todoDescription,
          status: "Pending"
       }
       setTodoList([...todoList, addTodo]);
    }

    function navigateToToDoList() {
        navigate("/");
    }

    return(
       <>
          <button className="todo-list-button" onClick={navigateToToDoList}>Todo List</button>
          <input className="todo-title" type="text" placeholder="Enter the title" 
            value={todoTitle} onChange={handleTitle} />
          <input className="todo-description" type="text" placeholder="Enter description"
            value={todoDescription} onChange={handleDescription} />
          <div className="button-group">
             <button className="cancle-button" onClick={handleCancleTodo}>Cancle</button>
             <button className="add-button" onClick={handleAddTodo}>Add</button>
          </div>
       </>
    );
}