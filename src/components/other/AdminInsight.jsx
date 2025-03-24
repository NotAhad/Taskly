import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdminInsight = () => {
  const [userData] = useContext(AuthContext);

  // Refs for managing drag scrolling
  const activeContainerRef = useRef(null);
  const startYRef = useRef(0);
  const initialScrollTopRef = useRef(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    activeContainerRef.current = e.currentTarget;
    startYRef.current = e.clientY;
    initialScrollTopRef.current = e.currentTarget.scrollTop;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (activeContainerRef.current) {
      const diffY = e.clientY - startYRef.current;
      activeContainerRef.current.scrollTop = initialScrollTopRef.current - diffY;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    activeContainerRef.current = null;
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row sm:gap-5 py-10">
        {/* User Task Statistics */}
        <div
          className="bg-[#1c1c1c] p-5 rounded-lg mt-5 xl:w-1/3 max-h-[23rem] overflow-y-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          role="region"
          aria-label="User Task Statistics"
        >
          <div className="bg-indigo-900 mb-3 py-2 px-4 flex text-center rounded-lg" role="row">
            <h2 className="text-xl font-bold w-1/5" role="columnheader">
              NAME
            </h2>
            <h3 className="text-xl font-bold w-1/5" role="columnheader">
              NEW
            </h3>
            <h5 className="text-xl font-bold w-1/5" role="columnheader">
              ACTIVE
            </h5>
            <h5 className="text-xl font-bold w-1/5" role="columnheader">
              DONE
            </h5>
            <h5 className="text-xl font-bold w-1/5" role="columnheader">
              FAILED
            </h5>
          </div>
          <div role="list">
            {userData.map((item) => (
              <div
                key={item.id}
                className="border-2 border-indigo-900 mb-3 py-2 px-4 flex text-center rounded-lg"
                role="listitem"
              >
                <h2 className="font-bold w-1/5">{item.firstName}</h2>
                <h3 className="font-bold w-1/5 text-blue-600">
                  {item.taskCounts.newTask}
                </h3>
                <h5 className="font-bold w-1/5 text-orange-500">
                  {item.taskCounts.active}
                </h5>
                <h5 className="font-bold w-1/5 text-green-600">
                  {item.taskCounts.completed}
                </h5>
                <h5 className="font-bold w-1/5 text-red-600">
                  {item.taskCounts.failed}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Activity */}
        <div
          className="bg-[#1c1c1c] p-5 rounded-lg mt-5 xl:w-1/3 max-h-[23rem] overflow-y-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          role="region"
          aria-label="Admin Activity Log"
        >
          <div className="bg-indigo-900 mb-3 py-2 px-4 text-center rounded-lg">
            <h2 className="text-xl font-bold">ADMIN ACTIVITY</h2>
          </div>
          <div role="list">
            <span
              className="font-bold border-2 border-red-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              CREATED A NEW TASK: UNWRAP SMALL PROPS FOR JIMMY
            </span>
            <span
              className="font-bold border-2 border-blue-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              RESET THE PASSWORD FOR KIM
            </span>
            <span
              className="font-bold border-2 border-green-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              SENT A TASK DEADLINE REMINDER TO AHAD
            </span>
            <span
              className="font-bold border-2 border-orange-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              CHANGED CATEGORY OF TASK: DESIGN LEVEL LAYOUT FOR AHAD
            </span>
          </div>
        </div>

        {/* Employee Activity */}
        <div
          className="bg-[#1c1c1c] p-5 rounded-lg mt-5 xl:w-1/3 max-h-[23rem] overflow-y-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          role="region"
          aria-label="Employee Activity Log"
        >
          <div className="bg-indigo-900 mb-3 py-2 px-4 text-center rounded-lg">
            <h2 className="text-xl font-bold">EMPLOYEE ACTIVITY</h2>
          </div>
          <div role="list">
            <span
              className="font-bold border-2 border-red-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              JIMMY MARKED TASK: REVIEW TEXTURE MAPS AS COMPLETED
            </span>
            <span
              className="font-bold border-2 border-blue-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              EMILY CHANGED PASSWORD
            </span>
            <span
              className="font-bold border-2 border-green-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              AHAD ACKNOWLEDGED DEADLINE REMINDER
            </span>
            <span
              className="font-bold border-2 border-orange-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              JARED REPLIED TO A COMMENT ON TASK: FIX INPUT LAG
            </span>
            <span
              className="font-bold border-2 border-red-600 mb-3 py-2 px-4 flex justify-center text-center rounded-lg"
              role="listitem"
            >
              EMILY SENT A MESSAGE TO ADMIN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInsight;
