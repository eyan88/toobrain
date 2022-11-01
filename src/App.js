import Header from "./components/Header";
import Timer from "./components/timer/Timer";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";

const App = () => {

  return (
    <div className='container'>
      <Header />
      <Timer />
    </div>
  )
};

export default App;