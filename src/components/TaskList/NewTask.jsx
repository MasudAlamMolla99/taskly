import React from "react";

const NewTask = ({ data }) => {
  const { taskTitle, taskDate, taskDescription, category } = data;

  return (
    <div className=" flex-shrink-0 h-full w-[300px]  bg-green-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm ">{category}</h3>
        <h4 className="text-sm">{taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskTitle}</h2>
      <p className="text-sm mt-2">{taskDescription}</p>
      <div className="mt-4">
        <button className="bg-blue-500 py-1 px-2 text-sm">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
