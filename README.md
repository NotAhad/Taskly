# Taskly: Role-Based Task Management Web Application

Taskly is a dynamic and user-friendly role-based task management web application designed to showcase front-end development skills. The project features a responsive design, role-based dashboards for admins and employees, and persistence using local storage. This project demonstrates proficiency in React, state management with Context API, controlled components, and modern UI practices with Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Future Improvements](#future-improvements)

## Overview

Taskly is built to simulate a real-world task management system where administrators can create, assign, and monitor tasks, while employees can view and update their task statuses. The application leverages:

- **React Hooks:** useState, useEffect, useContext, and useRef for managing state and interactions.
- **Local Storage:** For data persistence without a backend.
- **Tailwind CSS:** To achieve a modern, responsive UI design.
- **Custom Features:** Such as drag scrolling in activity panels and custom form validations.

## Features

- **Role-Based Access:** Separate dashboards for admins and employees.
- **Task Management:** Create, assign, and track tasks.
- **User Authentication:** Simple login flow using local storage.
- **Drag Scrolling:** Custom implementation for intuitive scrolling of task/activity lists.
- **Responsive Design:** Built with Tailwind CSS to support various device sizes.
- **Data Persistence:** Employees and admin data are persisted across sessions via local storage.

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/taskly.git
   cd taskly

   ```

2. **Install Dependencies:**

   Make sure you have Node.js installed. Then run: npm install

3. **Run the Application:**

   npm start

   This command starts the development server. Open http://localhost:3000 to view the application in your browser.

## Usage

**Login:**

- **On load, the application displays a login screen. Use the credentials from the pre-populated local storage (for admin or employee)**
- **Admin:** a1@gg.com
- **Employee:** e1@gg.com (or others from the local storage data)
- **Password: 123**

**Admin Dashboard:**

- **Task Management:** Create tasks using the form in the dashboard. On task creation, the selected employee’s task list and task counts update.
- **Activity Panels:** View user task statistics and activity logs with smooth drag scrolling.

**Employee Dashboard:**

- **View your assigned tasks and their statuses.**
- **Accept or decline tasks using the provided interface.**

## Challenges and Solutions

1. State Management with Context API
   Problem: Initially, managing authentication state and user data across multiple components was cumbersome. Prop drilling made it difficult to maintain a clean architecture.

Solution: I implemented the Context API to create a global authentication state. This allowed the app to manage user sessions efficiently while keeping the components decoupled.

Code Example (AuthProvider.js):

jsx
Copy
Edit
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [userData, setUserData] = useState([]);

useEffect(() => {
const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
setUserData(storedUsers);
}, []);

return (
<AuthContext.Provider value={[userData, setUserData]}>
{children}
</AuthContext.Provider>
);
};
This eliminated the need to pass props manually through multiple components.

2. Persistent Authentication Without Backend
   Problem: Since the project does not have a backend, keeping users logged in across page reloads was challenging.

Solution: I used localStorage to store login sessions and retrieve them on app load.

Code Example (App.js - useEffect to load session data):

jsx
Copy
Edit
useEffect(() => {
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
setAuthData(loggedInUser);
}
}, []);
This ensured that users remained logged in even after refreshing the page.

3. Drag Scrolling for Smooth User Experience
   Problem: The default scrollbar in the admin activity panel made navigation clunky.

Solution: I implemented mouse-drag scrolling to enable smooth, natural scrolling.

Code Example (AdminInsight.js - handling drag scrolling):

jsx
Copy
Edit
const handleMouseDown = (e) => {
e.preventDefault();
activeContainerRef.current = e.currentTarget;
startYRef.current = e.clientY;
initialScrollTopRef.current = e.currentTarget.scrollTop;

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
};
This allowed users to drag the activity panel effortlessly.

4. Task Management State Updates
   Problem: When updating task statuses, the UI did not immediately reflect changes due to React’s asynchronous state updates.

Solution: I used functional updates to ensure the latest state was used while updating tasks.

Code Example (EmployeeDashboard.js - updating task state safely):

jsx
Copy
Edit
setUserData((prevUserData) =>
prevUserData.map((user) =>
user.email === authData.data.email
? { ...user, tasks: updatedTasks }
: user
)
);
This approach prevented state inconsistencies.

5. Dynamic Form Validation for Task Creation
   Problem: Initially, users could submit empty or incomplete forms, leading to data integrity issues.

Solution: I implemented real-time form validation with controlled inputs.

Code Example (CreateTask.js - Preventing invalid submissions):

jsx
Copy
Edit
if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
setError("All fields are required.");
return;
}
Now, users cannot create incomplete tasks.

## Future Improvements

- **Enhanced Animations:** Incorporate GSAP animations for smooth transitions and interactive feedback.
- **Accessibility Enhancements:** Add keyboard navigation support and further ARIA attributes.
- **Backend Integration:** Replace local storage with a backend API for user authentication and persistent task management.
