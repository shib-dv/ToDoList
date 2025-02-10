import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ToDoContext } from "../../Context/ToDoContext";

export default function EditToDoComponent() {
    const editID = useParams();
    const navigate = useNavigate();
    const { todoList, setTodoList } = useContext(ToDoContext);
    const editTodoItem = todoList.find((item, index) => {
        return item.id === editID.id;
    });
    const [todoTitle, setToDoTitle] = useState(editTodoItem.name);
    const [todoDescription, setTodoDescription] = useState(editTodoItem.summary);

    
    function navigateToToDoList() {
        navigate("/");
    }

    function handleTitle(event) {
        setToDoTitle(event.target.value);
    }
    
    function handleDescription(event) {
        setTodoDescription(event.target.value);
    }

    function handleCancleToDo() {
        setToDoTitle("");
        setTodoDescription("");
    }

    function handleEditToDo() {
        let editedTodoList = todoList.map((item, index) => {
             if(item.id == editID.id) {
                item.name = todoTitle;
                item.summary = todoDescription;
             }
             return item;
        });
        setTodoList(editedTodoList);
    }

    return (
       <>
         <button className="todo-list-button" onClick={navigateToToDoList}>Todo List</button>
         <input className="todo-title" type="text" value={todoTitle} 
           onChange={handleTitle} />
          <input className="todo-description" type="text" value={todoDescription} 
            onChange={handleDescription} />
          <div className="button-group">
             <button className="cancle-button" onClick={handleCancleToDo}>Cancle</button>
             <button className="add-button" onClick={handleEditToDo}>Update</button>
          </div>
       </>
    );
}