import "./index.css";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";

const App = () => {
  // read notes

  // add note

  // delete note

  return (
    <>
      <div className="font-sans">
        <Header />
        <div className="p-6 h-screen bg-new-slate dark:bg-slate-600 rounded-lg overflow-auto">
          <Sidebar></Sidebar>
          <NotesList />
        </div>
      </div>
    </>
  )
};
export default App;