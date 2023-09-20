import logo from "./logo.svg";
import "./App.css";
import "./vendor/fontawesome-free/css/all.min.css";
import { useState } from "react";

import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";

import AddStudent from "./Pages/AddStudent";
import AddTeachers from "./Pages/AddTeachers";
import StudentsList from "./Components/StudentsList";
import TeachersList from "./Components/TeachersList";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/students-list" element={<StudentsList />} />
      <Route path="/teachers-list" element={<TeachersList />} />
      <Route path="/addStudents" element={<AddStudent />} />
      <Route path="/addTeacher" element={<AddTeachers />} />
    </Routes>
  );
}

export default App;
