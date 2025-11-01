import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

function CreateTask() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task.trim() === "") return;
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
    console.log("index is",index);
    
  }
  function deleteItem(index) {
   const updated= data.filter((list)=>list.id!==index)
    setData(updated);
    localStorage.setItem("taskList",JSON.stringify(updated))
  }
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
          Add Task
        </button>
        {/* Task list display here */}
        <TaskList data={data} editItem={editItem} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default CreateTask;
