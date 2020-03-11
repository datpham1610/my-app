import React, { Component } from 'react'
function DateTime(){
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString(undefined,options);
    return(
      <div className="date">{date}</div>
    )
  }
export default DateTime