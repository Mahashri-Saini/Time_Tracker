import React from "react";
import {useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './style.css'
 
function Progress ({percentage}) {
  

    return (
      <div>
        <ProgressBar completed={percentage} 
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName="label"/>
      </div>
    )
  }

  export default Progress