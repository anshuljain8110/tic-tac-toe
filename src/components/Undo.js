import React, { useContext } from 'react'
import { history } from "../context/Data"

export default function Undo() {
    const fcns = useContext(history)
    let len=fcns.a.length
    let p=""
    if(fcns.winnerName===""){
      if(fcns.error){
        p="Position Already Occupied 😓"
      }
      else{
        p=`It's Player ${fcns.turn} Turn Now 🤩`
      }
    }
    else{
      p=`The Winner is player ${fcns.winnerName} 🥳`
    }
    if(len===10&&fcns.winnerName===""){
      p="No One Won 😁 Restart The Game"
    }
  return (
    <div className='undo'>
        <button className='undobutton' onClick={fcns.undo} disabled={len===1||len===10||fcns.winnerName!==""}>Undo</button>
        <p>{p}</p>
        <button className='restartbutton' onClick={fcns.restart} disabled={len===1}>Restart</button>
    </div>
  )
}
