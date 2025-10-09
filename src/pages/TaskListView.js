import TaskList from "../components/TaskList"

function TaskListView({tasks, deleteTask}){
    return(
        <>
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
        </>
        
    )
}

export default TaskListView;
