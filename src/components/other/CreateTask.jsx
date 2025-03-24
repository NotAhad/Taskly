import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "2D ART",
    "3D ART",
    "PROGRAMMING",
    "TESTING",
    "LEVEL DESIGN",
    "UI DESIGN",
    "MUSIC & AUDIO",
  ];
  
  const employees = userData.map((user) => user.firstName);

  // Create refs for both scrollable containers
  const categoryContainerRef = useRef(null);
  const assignToContainerRef = useRef(null);

  // Generic scroll handler to allow dragging to scroll
  const handleScrollMouseDown = (e, containerRef) => {
    const startX = e.clientX;
    const scrollLeft = containerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const diff = e.clientX - startX;
      containerRef.current.scrollLeft = scrollLeft - diff;
    };

    const handleMouseUp = () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeEventListener("mouseup", handleMouseUp);
      containerRef.current.removeEventListener("mouseleave", handleMouseUp);
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseup", handleMouseUp);
    containerRef.current.addEventListener("mouseleave", handleMouseUp);
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    setSelectedCategory(cat);
  };

  const handleEmployeeClick = (employee) => {
    setAssignTo(employee);
    setSelectedEmployee(employee);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Create an immutable update of userData
    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    console.log(updatedData);

    // Reset form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setSelectedCategory("");
    setSelectedEmployee("");
  };

  // Check if all fields are filled
  const isFormValid =
    taskTitle && taskDescription && taskDate && assignTo && category;

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded w-full">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 gap-6 w-full items-start md:grid-cols-2 lg:grid-cols-12 lg:gap-8"
      >
        <div className="lg:col-span-6 xl:col-span-5 space-y-6">
          <div>
            <h3 className="text-xl mb-3 font-bold">TITLE</h3>
            <input
              aria-label="Task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="py-1 px-2 w-full rounded-lg outline-none bg-transparent border-2 mb-3"
              type="text"
              placeholder="ENTER TASK TITLE"
            />
            {!taskTitle && (
              <small className="text-red-500">Task title is required.</small>
            )}
          </div>

          <div>
            <h3 className="text-xl mb-3 font-bold">DEADLINE</h3>
            <input
              aria-label="Task deadline"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="py-1 px-2 w-full rounded-lg outline-none bg-transparent border-2 mb-3"
              type="date"
            />
            {!taskDate && (
              <small className="text-red-500">Deadline is required.</small>
            )}
          </div>

          <div>
            <h3 className="text-xl mb-3 font-bold">ASSIGN TO</h3>
            <div
              ref={assignToContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab pb-2"
              onMouseDown={(e) => handleScrollMouseDown(e, assignToContainerRef)}
              aria-label="Employee selection list"
            >
              {employees.map((employee, index) => (
                <button
                  key={`${employee}-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmployeeClick(employee);
                  }}
                  aria-label={`Assign task to ${employee}`}
                  className={`py-1 px-3 rounded-lg ${
                    selectedEmployee === employee
                      ? "bg-indigo-900"
                      : "bg-[rgb(40,40,40)] hover:bg-indigo-900"
                  }`}
                >
                  {employee}
                </button>
              ))}
            </div>
            {!assignTo && (
              <small className="text-red-500">Please select an employee.</small>
            )}
          </div>

          <div>
            <h3 className="text-xl mb-3 font-bold">CATEGORY</h3>
            <div
              ref={categoryContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab pb-2"
              onMouseDown={(e) => handleScrollMouseDown(e, categoryContainerRef)}
              aria-label="Category selection list"
            >
              {categories.map((cat, index) => (
                <button
                  key={`${cat}-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(cat);
                  }}
                  aria-label={`Select category ${cat}`}
                  className={`py-1 px-3 rounded-lg whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-indigo-900"
                      : "bg-[rgb(40,40,40)] hover:bg-indigo-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {!category && (
              <small className="text-red-500">Please select a category.</small>
            )}
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between sm:h-full">
          <h3 className="text-xl mb-2 font-bold">DESCRIPTION</h3>
          <textarea
            aria-label="Task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-2 px-4 rounded-lg outline-none bg-transparent border-2 h-[10rem] sm:h-full"
            placeholder="ENTER TASK DESCRIPTION"
          />
          {!taskDescription && (
            <small className="text-red-500">Task description is required.</small>
          )}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`py-2 px-5 rounded-lg text-xl mt-6 w-full font-bold ${
              isFormValid ? "bg-indigo-900" : "bg-[rgb(40,40,40)]"
            }`}
            aria-label="Create task"
          >
            CREATE TASK
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
