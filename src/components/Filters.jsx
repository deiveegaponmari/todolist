import React from 'react'

function Filters() {
  return (
    <div>
        <h1 className='text-2xl font-semibold'>Filter</h1>
        <div className='flex gap-5'>
        <div>
        <input type='radio'></input>
        <label>All</label>
        </div>
         <div>
        <input type='radio'></input>
        <label>Completed</label>
        </div>
         <div>
        <input type='radio'></input>
        <label>Pending</label>
        </div>
        </div>
    </div>
  )
}

export default Filters