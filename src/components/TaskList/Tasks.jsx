import React, { useState, useRef } from "react";
import AcceptTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasks = ({
  data = {
    tasks: [],
    taskCounts: { newTask: 0, active: 0, completed: 0, failed: 0 },
  },
}) => {
  // State to track dragging
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Object for scrollable container refs
  const taskRefs = {
    newTasks: useRef(null),
    activeTasks: useRef(null),
    completedTasks: useRef(null),
    failedTasks: useRef(null),
  };

  const handleMouseDown = (e, type) => {
    setIsDragging(true);
    const ref = taskRefs[type].current;
    setStartX(e.pageX - ref.offsetLeft);
    setScrollLeft(ref.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e, type) => {
    if (!isDragging) return;
    e.preventDefault();
    const ref = taskRefs[type].current;
    const x = e.pageX - ref.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed by multiplying
    ref.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col h-screen gap-3 mt-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:min-h-56 flex items-center md:flex-col justify-center w-full md:w-[100px] bg-orange-600 p-5 rounded-lg">
          <div className="flex items-center justify-center md:flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-6xl md:font-normal">
              {data.taskCounts.newTask}
            </h1>
            <p className="font-bold text-2xl">NEW</p>
          </div>
        </div>
        <div
          className="flex gap-3 overflow-hidden w-full cursor-grab"
          ref={taskRefs.newTasks}
          onMouseDown={(e) => handleMouseDown(e, "newTasks")}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e, "newTasks")}
          style={{ userSelect: "none" }} // Disable text selection while dragging
        >
          {data.tasks
            .filter((task) => task.newTask)
            .map((elem, idx) => (
              <NewTask key={idx} data={elem} />
            ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:min-h-56 flex items-center md:flex-col justify-center w-full md:w-[100px] bg-blue-600 p-5 rounded-lg">
          <div className="flex items-center justify-center md:flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-6xl md:font-normal">
              {data.taskCounts.active}
            </h1>
            <p className="font-bold text-2xl">ACTIVE</p>
          </div>
        </div>
        <div
          className="flex gap-3 overflow-hidden w-full cursor-grab"
          ref={taskRefs.activeTasks}
          onMouseDown={(e) => handleMouseDown(e, "activeTasks")}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e, "activeTasks")}
          style={{ userSelect: "none" }}
        >
          {data.tasks
            .filter((task) => task.active)
            .map((elem, idx) => (
              <AcceptTask key={idx} data={elem} />
            ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:min-h-56 flex items-center md:flex-col justify-center w-full md:w-[100px] bg-green-600 p-5 rounded-lg">
          <div className="flex items-center justify-center md:flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-6xl md:font-normal">
              {data.taskCounts.completed}
            </h1>
            <p className="font-bold text-2xl">DONE</p>
          </div>
        </div>
        <div
          className="flex gap-3 overflow-hidden w-full cursor-grab"
          ref={taskRefs.completedTasks}
          onMouseDown={(e) => handleMouseDown(e, "completedTasks")}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e, "completedTasks")}
          style={{ userSelect: "none" }}
        >
          {data.tasks
            .filter((task) => task.completed)
            .map((elem, idx) => (
              <CompleteTask key={idx} data={elem} />
            ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 pb-10">
        <div className="md:min-h-56 flex items-center md:flex-col justify-center w-full md:w-[100px] bg-red-600 p-5 rounded-lg">
          <div className="flex items-center justify-center md:flex-col gap-2">
            <h1 className="font-bold text-2xl md:text-6xl md:font-normal">
              {data.taskCounts.failed}
            </h1>
            <p className="font-bold text-2xl">FAILED</p>
          </div>
        </div>
        <div
          className="flex gap-3 overflow-hidden w-full md:w-[1750px] cursor-grab"
          ref={taskRefs.failedTasks}
          onMouseDown={(e) => handleMouseDown(e, "failedTasks")}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e, "failedTasks")}
          style={{ userSelect: "none" }}
        >
          {data.tasks
            .filter((task) => task.failed)
            .map((elem, idx) => (
              <FailedTask key={idx} data={elem} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
