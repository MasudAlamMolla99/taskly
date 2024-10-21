import React from "react";

const TaskListNumber = ({ data }) => {
  console.log(data, "employee");
  const { active, newTask, completed, failed } = data.taskCounts;
  return (
    <div className="flex  mt-10  justify-between gap-5">
      <div className=" rounded-xl w-[45%]  py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" rounded-xl w-[45%]  py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className=" rounded-xl w-[45%]  py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{active}</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>
      <div className=" rounded-xl w-[45%]  py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
