import React from 'react'

function Filters(props) {
  return (
    <div>
        <h1 className='text-2xl font-semibold'>Filter</h1>
        <div className='flex gap-5'>
        <div>
        <input type='radio' name='filter' value='all' 
        checked={props.filter==='all'}
        onChange={()=>props.setFilter("all")}></input>
        <label>All</label>
        </div>
         <div>
        <input type='radio'  name='filter' value='completed' 
        checked={props.filter==='completed'}
        onChange={()=>props.setFilter("completed")}></input>
        <label>Completed</label>
        </div>
         <div>
        <input type='radio'  name='filter' value='pending' 
        checked={props.filter==="pending"}
        onChange={()=>props.setFilter("pending")}></input>
        <label>Pending</label>
        </div>
        </div>
    </div>
  )
}

export default Filters