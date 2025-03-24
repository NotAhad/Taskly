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
On load, the application displays a login screen. Use the credentials from the pre-populated local storage (for admin or employee). For example:
Admin: a1@gg.com
Employee: e1@gg.com (or others from the local storage data)

**Admin Dashboard:**

- **Task Management:** Create tasks using the form in the dashboard. On task creation, the selected employee’s task list and task counts update.
- **Activity Panels:** View user task statistics and activity logs with smooth drag scrolling.

**Employee Dashboard:**

- **View your assigned tasks and their statuses.**
- **Accept or decline tasks using the provided interface.**

## Future Improvements

- **Enhanced Animations:** Incorporate GSAP animations for smooth transitions and interactive feedback.
- **Accessibility Enhancements:** Add keyboard navigation support and further ARIA attributes.
- **Backend Integration:** Replace local storage with a backend API for user authentication and persistent task management.
