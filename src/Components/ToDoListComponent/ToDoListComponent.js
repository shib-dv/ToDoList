import { GrFormSearch } from "react-icons/gr";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { IoAddCircleSharp } from "react-icons/io5";
import "./ToDoListComponent.css";
import { ToDoContext } from "../../Context/ToDoContext";
import ToDoItem from "../ToDoItem/ToDoItem";
import TodoList from "../../Context/TodoList";

export default function ToDoListComponent() {
    const {todoList, setTodoList} = useContext(ToDoContext);
    const [searchText, setSearchText] = useState("");
    const [searchedTodoList, setSearchedTodoList] = useState(todoList);
    const navigate = useNavigate();
    
    useEffect(() => {
        let list = todoList.filter((item, index) => {
            return (item.name.toLowerCase()).includes(searchText.toLowerCase());
        });
        setSearchedTodoList(list);
    }, [searchText, todoList]);

    function handleSearch(event) {
        setSearchText(event.target.value);
    }

    function handleAddToDoList() {
        return navigate("/AddToDo");
    }

    function handleEditTodoList(id) {
       navigate("/EditToDo/" + id);
    }

    return (
    <>
       <input className="search-button" type="search" placeholder="Search ToDo" 
         value={searchText} onChange={handleSearch}></input>  
       <span className="search-icon"> <GrFormSearch /> </span>
       <div>
        <ol>
          {searchedTodoList.map((item, index) => {
               return <li key={item.id} onClick={() => {handleEditTodoList(item.id)}}> 
                 <ToDoItem item={item} /> </li>
          })}
          </ol>
       </div>
       <div className="add-icon" onClick={handleAddToDoList}>
          <IoAddCircleSharp size={50} color="blue" />
       </div>
    </>);   
}