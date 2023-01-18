import "./index.css";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import { ClassNames } from "@emotion/react";

const App = () => {
  // read notes

  // add note

  // delete note

  return (
    <>
      <div className="font-sans">
        <Header />
        <div className="p-6 min-w-screen max-w-6xl container bg-new-slate h-screen">
          <Sidebar></Sidebar>
          <NotesList />
        </div>
      </div>
    </>
  )
};
export default App;