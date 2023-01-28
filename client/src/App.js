import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
import { Outlet, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {


  return (
    <>
      <div className="">
        <Header />
        <div className="p-6 h-screen bg-new-slate dark:bg-dark-slate overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
};
export default App;