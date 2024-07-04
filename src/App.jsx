import React from "react";
import FirstPage from "./FirstPage";
import { NavLink, Route, Routes } from "react-router-dom";
import PlanToday from "./PlanToday";
import AnalyseToday from "./AnalyseToday";
import ThisWeek from "./ThisWeek.jsx";
import ThisMonth from "./ThisMonth.jsx";
import ThisYear from "./ThisYear.jsx";

function App() {
  return(
    <div className="App2">
<Routes>
    <Route path="/" element={<FirstPage/>}/>
    <Route path="/FirstPage/PlanToday" element={<PlanToday/>}/>
    <Route path="/FirstPage/AnalyseToday" element={<AnalyseToday/>}/>
    <Route path="/FirstPage/ThisWeek" element={<ThisWeek/>}/>
    <Route path="/FirstPage/ThisMonth" element={<ThisMonth/>}/>
    <Route path="/FirstPage/ThisYear" element={<ThisYear/>}/>

</Routes>
        </div>
  )
}

export default App;
