import React,{useState, useEffect } from "react";
import CirProg from './CirProg'
import Progress from './Progress'

function TIMER({duration})
{
const [time, setTime]=useState(duration);
const [start, setStart] = useState(0);
useEffect(()=>{
    if(time>0 && start === 1)
    {setTimeout(()=> {
        setTime(time-1000);
    },1000);}
},[time, start]);

//const myInterval=(setInterval(time-1000,1000));

function startHandler()
{
setStart(1);
}

function pauseHandler()
{
    setStart(0);
}

const getFormattedTime=(milli)=>{
    let total_sec=parseInt(Math.floor(milli/1000));
    let total_min=parseInt(Math.floor(total_sec/60));
    let total_hr=parseInt(Math.floor(total_min/60));
    let total_day=parseInt(Math.floor(total_hr/24));

    let sec=parseInt(total_sec%60);
    let min=parseInt(total_min%60);
    let hr=parseInt(total_hr%24);
    return `${total_day} : ${hr} : ${min} : ${sec}`;

};

    return(
        <><div className="flex justify-around  w-full text-[#2D142C]">
        <div className="flex justify-evenly border-2 border-violet-300 p-1">
            <div className="px-2">{getFormattedTime(time)}</div>
            <button  onClick={startHandler} className="bg-[#801336] hover:bg-[#510A32] rounded-md text-white px-1 mx-3">Start</button>
            <button  onClick={pauseHandler} className="bg-[#801336] hover:bg-[#510A32] rounded-md text-white px-1 mx-3">Pause</button>
        </div>
        <div className=" w-[200px] h-[30px] ml-2.5 "><Progress percentage={100-Math.floor((time/duration)*100)}/></div>
        </div>
        </>
    )
}

export default TIMER