import React from 'react'
import CirProg from './components/CirProg'
import {useNavigate} from 'react-router-dom'
 function AnalyseToday(props) {
    const navigate=useNavigate();
  function clickHandler()
  {
navigate("/");
  }

    return (
        <>
        <div className="h-full w-full p-4 bg-gradient-to-b from-[#2D142C] to-[#EE4540] ">
        <button onClick={clickHandler} className='bg-[#801336] mx-2 rounded-full hover:bg-[#2D142C]  p-4 py-2 text-sm font-bold text-white'>HOME</button>

            <div className="m-4 p-4"><p className="text-center text-7xl font-semibold text-[#EE4540]">Let's See how was your day !!! </p></div>
            <div className="flex justify-around w-full h-full ">
                 <div className=" p-4 my-4 flex flex-col justify-center items-center  w-[45%] border-8 border-[#FECEA8] rounded-2xl border-dotted">
                     <div className=" m-[5px] p-[3px] w-[70%]   " ><CirProg percentage="50"/></div>
                     <h2 className="text-4xl my-2 py-2">No. of targets completed today.</h2>
                </div>
                <div className="my-4 flex flex-col justify-center items-center  w-[45%] border-8 border-[#FECEA8] rounded-2xl border-dotted">
                      <div className=" m-[5px] p-[10px] w-[70%]   text-center"><CirProg percentage="50"/></div>
                      <h2 className="text-4xl my-2 py-2">No. of targets incomplete.</h2>
                 </div>
            </div>

        </div>
        </>
    )
}

export default AnalyseToday
