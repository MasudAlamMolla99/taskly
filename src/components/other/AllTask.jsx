import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48 ">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium ">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium ">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium ">Failed</h5>
      </div>

      <div className=" overflow-auto">
        {authData.map((e, idx) => {
          const { active, newTask, completed, failed } = e.taskCounts;
          return (
            <div
              key={idx}
              className=" border-2 border-emerald-400 py-2 px-4 flex justify-between rounded mb-2">
              <h2 className="w-1/5 text-lg font-medium">{e.name}</h2>
              <h3 className="w-1/5 text-lg font-medium  text-blue-600">
                {active}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {newTask}
              </h5>
              <h5 className="w-1/5 text-green-600">{completed}</h5>
              <h5 className="w-1/5 text-lg font-medium text-red-600">
                {failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
