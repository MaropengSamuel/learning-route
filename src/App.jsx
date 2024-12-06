import React,{ useState } from "react";

import "./App.css";
import Dashobord from "./pages/DashBord";
import Goals from "./pages/Goals";
import Spending from "./pages/Spending";
import Total from "./pages/Total";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  

  return (
    <div className="dark:bg-boxdark-2 text-gray-600">
      <div className="flex h-screen overflow-hidden">
        <div className=" p-7 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-200 duration-300 ease-linear">
          <div className="mb-4 ">
          <Link to="/" className="bg-cyan-500 block  text-white p-1 rounded w-full" >Dashobord</Link>
          </div>
          <div className="mb-4">
          <Link to="/goals" className="bg-cyan-500 block text-white p-1 rounded w-full" >Goal</Link>
        
          </div>
          <div className="mb-4">
          <Link to="/spending" className="bg-cyan-500 block text-white p-1 rounded w-full" >Spending</Link>
          </div>
          <div className="mb-4">
          <Link to="/total" className="bg-cyan-500 block text-white p-1 rounded w-full" >Total</Link>
          </div>
        </div>
<div className="p-2">
  
<Routes>
        <Route path="/" element={<Dashobord/>}/>
        <Route path="/goals" element={<Goals className="p-2"/>}/>
        <Route path="/spending" element={<Spending/>}/>
        <Route path="total" element ={<Total/>}/>
      </Routes>

</div>

          
      </div>
    
    </div>
  );
}

export default App;
