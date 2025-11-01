import React, { useEffect, useState } from 'react'

function TaskList(props) {
     const[taskData,setTaskData]=useState([]);
       useEffect(()=>{
        if(props.data.length>0){
            setTaskData(props.data)
        localStorage.setItem("taskList",JSON.stringify(props.data))
        }
    },[props.data])
   useEffect(()=>{
    const getTasks=JSON.parse(localStorage.getItem("taskList"));
    if(getTasks){
        setTaskData(getTasks)
    }
   },[]) 
  return (
    <div className='flex flex-col'>
        <h1>Your Task Today</h1>
        <ul>
            {/* dynamically added list here */}
            {
               taskData.length===0 ? "No Task Added" :
            
                taskData.map((list,index)=>{
                    return <div key={list.id} className='flex'>
                        <input type='checkbox'/>
                        <div className='flex flex-col'>
                        <h1>{list.text}</h1>
                        <h5>{list.category}</h5>
                        </div>
                        <button>Edit</button>
                         <button>Delete</button>
                    </div>
                })
            }
        </ul>
    </div>
  )
}

export default TaskList