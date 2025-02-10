import "./ToDoItem.css";

export default function ToDoItem(props) {
    let statusColor = getStatusColor(props.item.status);
    return (
        <>
           <div className="todo-list">
              <div className="list-details">
                 <h3>{props.item.name}</h3>
                 <p>{props.item.summary}</p>
              </div>
              <div className="list-status" style={{color: statusColor}}>{props.item.status}</div>
           </div>
        </>
    );
}

function getStatusColor(status) {
    if(status === "Pending") {
        return "#808080";
    } else if(status === "In Progress") {
        return "#ffa500";
    } else {
        return "#008000";
    }

}