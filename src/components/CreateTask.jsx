import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Filters from "./Filters";

function CreateTask() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter,setFilter]=useState("all")
  const addTask = () => {
    if (task.trim() === "") return;
    if (editId) {
      const updatedTask = data.map((item) =>
        item.id === editId ? { ...item, text: task, category: category } : item
      );
      setData(updatedTask);
      localStorage.setItem("taskList", JSON.stringify(updatedTask));
      setTask(""); //clear user input
      setCategory(""); //clear category
      setEditId(null); //stop editing
      return;
    }
    const newTask = {
      id: Date.now(),
      text: task,
      category: category,
      completed: false,
    };
    const updatedTask = [...data, newTask];
    setData(updatedTask);
    localStorage.setItem("taskList", JSON.stringify(updatedTask));
    setTask(""); //clear user input
    setCategory(""); //clear category
  };
  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("taskList"));
    if (getTasks) {
      setData(getTasks);
    }
  }, []);
  function editItem(index) {
    console.log("index is", index);
    const edited = data.find((edit) => edit.id === index);
    setCategory(edited.category);
    setTask(edited.text);
    setEditId(index);
    //console.log(edited.text)
    /*  if(edited){
      edited.map((item)=>{
        return console.log(item.text)
      })
    } */
  }
  function deleteItem(index) {
    const updated = data.filter((list) => list.id !== index);
    setData(updated);
    localStorage.setItem("taskList", JSON.stringify(updated));
  }
  const toggleItem=(id)=>{
    const updated=data.map((item)=> item.id===id ?{...item,completed:!item.completed}:item
    )
    setData(updated);
    localStorage.setItem("taskList", JSON.stringify(updated));
    //all task completion
    const allTask=updated.length>0 && updated.every((item)=>item.completed);
    if(allTask){
      alert("Congratulations!!!..Your All Tasks Completed")
    }
  }
  const filteredTasks=filter==="completed" ? data.filter((item)=>item.completed)
  :filter==="pending" ? data.filter((itemval)=>!itemval.completed):data;
  return (
    <div className="bg-white w-xl p-5 h-screen mt-30 mb-10">
      <h1 className="text-3xl font-bold ">To Do List</h1>
      <div className="bg-white-200 flex flex-col justify-center">
        {/*  select category */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="health">Health</option>
          <option value="skill">Skill</option>
          <option value="selfcare">SelfCare</option>
          <option value="others">Others</option>
        </select>
        {/*   user input ---add task here */}
        <input
          type="text"
          value={task}
          placeholder="Enter Task Here"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-200 text-white"
          onClick={addTask}
        >
          {editId ? "Update Task" : "Add Task"}
        </button>
       {/*  Filter component */}
     <Filters filter={filter} setFilter={setFilter}/>
        {/* Task list display here */}
        <TaskList data={filteredTasks} editItem={editItem} deleteItem={deleteItem} toggleItem={toggleItem} />
      </div>
    </div>
  );
}

export default CreateTask;
