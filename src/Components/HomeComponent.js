import { Outlet } from "react-router";
import { Link } from "react-router";
export default function HomeComponent() {
    return (<>
           <nav>
              <ul>
                 <li key="0">
                  <Link to="/Home"> Home </Link>
                </li>
                <li key="1">
                  <Link to="/Home/ToDoList"> ToDo List </Link>
                </li>
              </ul>
           </nav>
           <Outlet />
        </>);
}