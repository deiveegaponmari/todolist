import React from "react";

function TaskList(props) {
  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-gray-800 mb-3">Your Task Today</h1>
      {/* dynamically added list here */}
      {props.data.length === 0 ? (
        <p className="bg-gray-100 rounded py-2 text-center text-gray-800">
          No Task
        </p>
      ) : (
        <ul className="space-y-3">
          {props.data.map((list, index) => {
            return (
              <li
                key={list.id}
                className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm "
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={list.completed}
                    onChange={() => props.toggleItem(list.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <div>
                    <p 
                    className={`text-lg font-semifold ${list.completed ? "line-through text-gray-500" :"text-gray-800"}`}>{list.text}</p>
                    <span className="text-sm text-gray-600 capitalize">Category:{list.category || "None"}</span>
                  </div>
                </div>
                <button
                  onClick={() => props.editItem(list.id)}
                  className="px-3 py-1 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteItem(list.id)}
                  className="px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
