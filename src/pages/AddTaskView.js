import AddTaskForm from "../components/AddTaskForm"

function AddTaskView({addTask}){
    return(
        <>
            <AddTaskForm addTask={addTask}/>
        </>
       
    )
}

export default AddTaskView;