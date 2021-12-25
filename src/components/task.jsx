import './task.css'

const Task = (props) => {
    const deleteTask = () => {
        props.onDelete(props.info.id);
    }

    return (
      <div className="task">
          <button onClick={deleteTask} className="btn btn-sm btn-danger">Delete</button>
        <h4>{props.info.title}</h4>
        <h6>{props.info.location}</h6>
        <p>{props.info.description}</p>
      </div>
    );
  };
  
  export default Task;