import './App.css';
import { useState } from 'react';   
import { Route, Routes } from 'react-router';
import { ToDoContext } from "./Context/ToDoContext";
import { BrowserRouter } from 'react-router';
import HomeComponent from "./Components/HomeComponent";
import ToDoListComponent  from "./Components/ToDoListComponent/ToDoListComponent";
import AddToDoComponent from "./Components/AddToDoComponent/AddToDoComponent";
import EditToDoComponent from "./Components/EditToDoComponent/EditToDoComponent";
import TodoList from "./Context/TodoList";

function App() {
    const [todoList, setTodoList] = useState(TodoList);
    const [todoListMaxID, setToDoListMaxID] = useState(5);
    
    return(
     <ToDoContext.Provider value={{todoList, setTodoList, todoListMaxID, setToDoListMaxID}}>
     <BrowserRouter> 
       <Routes>
            <Route path="/" element={<ToDoListComponent/>} />
            <Route path="/AddToDo" element={<AddToDoComponent/>} />
            <Route path="/EditToDo/:id" element={<EditToDoComponent/>} />        
       </Routes>
    </BrowserRouter>
    </ToDoContext.Provider>
    );
}

export default App;
