import React, { useContext } from 'react'
import { history } from "../context/Data"
import Box from './Box'

export default function Grid() {
  const fcns = useContext(history)
  let len=fcns.a.length
  let a=fcns.a[len-1]
  return (
    <>
        <div></div>
        <div className='board'>
          {a.map((x,i)=>{
           return <Box marking={a[i]} index={i} key={i}/>
          })}
        </div>
        <div></div>
    </>
  )
}
