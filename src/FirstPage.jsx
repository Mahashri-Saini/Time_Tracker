import React from "react";
import PlanToday from './PlanToday'
import AnalyseToday from './AnalyseToday.jsx'
import ThisWeek from './ThisWeek.jsx'
import ThisMonth from './ThisMonth.jsx'
import ThisYear from './ThisYear.jsx'
import{Link, NavLink, Routes, Route} from 'react-router-dom'
import Quote from './components/Quote.jsx'


function FirstPage() {
  return (
    <><div className="flex justify-center h-full bg-gradient-to-r from-[#2D142C] to-[#510A32] text-[#EE4540]">
    <div className="relative flex flex-col justify-between  h-full w-5/6 m-10">
    <div className="flex felx-wrap justify-around h-5/6">
      {/*//left part*/}
    <div className="flex flex-col m-6 ">

         {/*//top part*/}
        <div>
             <div className="my-4">
              {/* //heading */}
              <h1 className=" text-9xl font-extrabold">Time <br></br>Tracker</h1>
             </div>
             <div>
             {/* //description will come here */}
             <p className="text-5xl m-4 p-4">track your time</p>
            </div>
        </div>

      {/* //bottom part */}
        <div> 
             <Quote/>
        </div>
    </div>







      {/* //right part  */}
    
      <div className=" relative flex flex-col justify-around text-4xl m-6 p-5 h-6/6 border-4 w-[50%] border-dashed border-[#801336] rounded-lg">

       <div className="hover:border-b-[6px] border-[#801336]  w-full">
        {/* <Link to="/">Plan Today</Link> */}
        <NavLink to="/FirstPage/PlanToday">Plan Today</NavLink>
        </div>
        <div  className="hover:border-b-[6px] border-[#801336] w-full">
        {/* <Link to="/AnalyseToday" >Analyse Today</Link> */}
        <NavLink to="/FirstPage/AnalyseToday">Analysetoday</NavLink>
        </div>
        <div  className="hover:border-b-[6px] border-[#801336] w-full">
        {/* <Link to="/ThisWeek" >This Week</Link> */}
        <NavLink to="/FirstPage/ThisWeek">This week</NavLink>
        </div>
        <div  className="hover:border-b-[6px] border-[#801336]  w-full">
        {/* <Link to="/ThisMonth" >This Month</Link> */}
        <NavLink to="/FirstPage/ThisMonth">This month</NavLink>
        </div>
        <div  className="hover:border-b-[6px] border-[#801336]  w-full">
        {/* <Link to="/ThisYear" >This Year</Link> */}
        <NavLink to="/FirstPage/ThisYear">This year</NavLink>
        </div> 
      </div>
</div>


{/* time....footer og page1 */}
<div className="">
    <p>Space for timeline</p></div>

</div></div>



    </>
  );
}

export default FirstPage;
