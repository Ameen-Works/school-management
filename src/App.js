import logo from "./logo.svg";
import "./App.css";
import "./vendor/fontawesome-free/css/all.min.css";
import { useState } from "react";

import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import Colors from "./Utilities/Colors";
import Borders from "./Utilities/Borders";
import Animations from "./Utilities/Animations";
import Oters from "./Utilities/Oters";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import Page404 from "./Pages/Page404";
import Blank from "./Pages/Blank";
import Charts from "./Components/Charts";
import Tables from "./Components/Tables";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/button" element={<Buttons />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/borders" element={<Borders />} />
      <Route path="/animations" element={<Animations />} />
      <Route path="/other" element={<Oters />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/404/error" element={<Page404 />} />
      <Route path="/blankpage" element={<Blank />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/tables" element={<Tables />} />
    </Routes>
  );
}

export default App;
