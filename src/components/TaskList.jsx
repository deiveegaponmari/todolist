import React from "react";

function TaskList(props) {
  return (
    <div className="flex flex-col justify-center p-5">
      <h1>Your Task Today</h1>
      <ul>
        {/* dynamically added list here */}
        {props.data.length === 0
          ? "No Task Added"
          : props.data.map((list, index) => {
              return (
                <div key={list.id} className="flex gap-2 ">
                  <input type="checkbox" />
                  <div className="flex flex-col">
                    <h1>{list.text}</h1>
                    <h5>{list.category}</h5>
                  </div>
                  <button
                    className="bg-yellow-300 w-14 h-8 rounded"
                    onClick={() => props.editItem(list.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-300 w-14 h-8 rounded"
                    onClick={() => props.deleteItem(list.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
      </ul>
    </div>
  );
}

export default TaskList;
