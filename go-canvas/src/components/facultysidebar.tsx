import React from "react";
import { NavLink } from "react-router-dom";

function FacultySidebar() {
  return <>
  <nav className="navbar">
            <ul>
            <li><NavLink className="nav-link" onClick={e => document.body.classList.remove('sidebar-open')} to={"/faculty_dashboard"} title="Dashboard">Home</NavLink></li>
            <li><NavLink className="nav-link" onClick={e => document.body.classList.remove('sidebar-open')} to={"/faculty_announcement"} title="Announcments">Announcments</NavLink></li>
            <li><NavLink className="nav-link" onClick={e => document.body.classList.remove('sidebar-open')} to={"/faculty_assignment"} title="Assignments">Assignments</NavLink></li>
            <li><NavLink className="nav-link" onClick={e => document.body.classList.remove('sidebar-open')} to={"/faculty_quiz"} title="Quizzes">Quizzes</NavLink></li>
            <li><NavLink className="nav-link" onClick={e => document.body.classList.remove('sidebar-open')} to={"/faculty_grades"} title="Grades">Grades</NavLink></li>
            <li><NavLink className="nav-link" onClick={e => document.body.classList.remove('sidebar-open')} to={"/student_list"} title="Students">Students</NavLink></li>
            </ul>
        </nav>
  </>;
}

export default FacultySidebar;
