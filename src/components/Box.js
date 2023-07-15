import React, { useContext } from 'react'
import { history } from "../context/Data"

export default function Box(props) {
  const fcns = useContext(history)
  let color = props.marking==="X"?"rgb(21, 133, 133)":"rgb(244, 71, 71)"
  return (
    <button onClick={()=>fcns.change(props.index)} className='box' disabled={fcns.winnerName!==""} style={{color:color}}>
      {props.marking}
    </button>
  )
}
