import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";
import LoginComponent from "./Forms/LoginComponent";
import Dashboard from "./Components/Dashboard";
import Preferences from "./Components/Preferences";
import Users from "./Actions/Users";

function App() {
  return (
    <div className="wrapper">
      <h1>Todo App</h1>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/logincomponent"
            element={<LoginComponent />}
          ></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
