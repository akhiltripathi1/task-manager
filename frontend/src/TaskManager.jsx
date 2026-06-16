import { useEffect, useState } from "react";
import { FaPlus, FaSearch, FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa"
import { ToastContainer } from "react-toastify"
import { CreateTask, DeleteTaskById, GetAllTask, UpdateTaskById } from "./api";
import { notify } from "./utils";

function TaskManager() {
    const [input, setInput] = useState("");

    const [task, setTask] = useState([])
    const [copyTask, setCopyTask] = useState([]);
    const [updateTask, setUpdateTask] = useState(null)

    const handleTask = () =>{
        if(updateTask && input){
            // update api call
            // console.log("update api call");
            const obj = {
                taskName :input,
                isDone :updateTask.isDone,
                _id : updateTask._id
            }
            handleUpdateItem(obj);
            
        }else if(updateTask===null && input){
            // create api call
            // console.log("create api call");
            handleAddTask()
        }
        setInput("")
    }
    useEffect(()=>{
        if(updateTask){
            setInput(updateTask.taskName)
        }
    },[updateTask])

    const handleAddTask = async () => {
        const obj = {
            taskName: input,
            isDone: false
        }
        try {
            // const data = await CreateTask(obj);  //destructuring it below
            // console.log(data);

            const { success, message } = await CreateTask(obj);
            if (success) {
                //show success toast
                notify(message, 'success')
            } else {
                //show error toast
                notify(message, 'error')
            }
            fetchAllTask()
        } catch (err) {
            console.error(err);
            notify("Failed to create task", 'error')
        }
    }

    const fetchAllTask = async () => {
        try {
            const { data } = await GetAllTask();
            setTask(data)
            setCopyTask(data)
        } catch (err) {
            console.error(err);
            notify("Failed to get tasks", 'error')
        }
    } 

    useEffect(() => {
        fetchAllTask()
    }, [])

    const handleDeleteTask = async (id) =>{
        try {
            const { success, message } = await DeleteTaskById(id);
            if (success) {
                //show success toast
                notify(message, 'success')
            } else {
                //show error toast
                notify(message, 'error')
            }
            fetchAllTask()
        } catch (err) {
            console.error(err);
            notify("Failed to delete tasks", 'error')
        }
    }

    const handleCheckAndUncheck = async (item) =>{
        const {_id, isDone, taskName} = item;
        const obj = {
            taskName,
            isDone: !isDone
        }
        try {
            const { success, message } = await UpdateTaskById(_id, obj);
            if (success) {
                //show success toast
                notify(message, 'success')
            } else {
                //show error toast
                notify(message, 'error')
            }
            fetchAllTask()
        } catch (err) {
            console.error(err);
            notify("Failed to update tasks", 'error')
        }
    }

    const handleUpdateItem = async (item) =>{
        const {_id, isDone, taskName} = item;
        const obj = {
            taskName,
            isDone: isDone
        }
        try {
            const { success, message } = await UpdateTaskById(_id, obj);
            if (success) {
                //show success toast
                notify(message, 'success')
            } else {
                //show error toast
                notify(message, 'error')
            }
            fetchAllTask()
        } catch (err) {
            console.error(err);
            notify("Failed to update tasks", 'error')
        }
    }

    const handleSearch = (e) =>{
        const term = e.target.value.toLowerCase() ;
        const oldTask =  [...copyTask];
        const results = oldTask.filter((item)=>item.taskName.toLowerCase().includes(term))
        setTask(results);
    }

    return (
        <div className="d-flex flex-column align-items-center w-50 m-auto mt-5">
            <h1 className="m-4">Task Manager</h1>
            {/* input and search box */}
            <div className="d-flex justify-content-between align-items-center mb-4 w-100">

                <div className="input-group flex-grow-1 me-2" >
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="form-control me-1" placeholder="Add a new Task" />
                    <button onClick={handleTask} className="btn btn-success btn-sm me-2"><FaPlus className="m-2" /></button>
                </div>           {/* handleAddTask */}
                <div className="input-group flex-grow-1">
                    <span className="input-group-text"><FaSearch /></span>
                    <input onChange={handleSearch} className="form-control" type="text" placeholder="Search Tasks" />
                </div>
            </div>

            {/* list of items */}
            <div className="d-flex flex-column w-100">
                {
                    task.map((item) => (
                        <div key={item._id} className="m-2 p-2 border bg-light w-100 rounded d-flex justify-content-between align-items-center">
                            <span className={item.isDone? "text-decoration-line-through": ""}>
                                {item.taskName}
                            </span>
                            <div>
                                <button onClick={()=>handleCheckAndUncheck(item)} className="btn btn-sm btn-success me-2" type="button"><FaCheck /></button>
                                <button onClick={()=>setUpdateTask(item)} className="btn btn-sm btn-primary me-2" type="button"><FaPencilAlt /></button>
                                <button onClick={()=>handleDeleteTask(item._id)} className="btn btn-sm btn-danger me-2" type="button"><FaTrash /></button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* taostify */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    )
}
export default TaskManager;