import React, { createContext, useState } from 'react';
const history = createContext()

export default function Data(props) {
  let [a, seta] = useState([["", "", "", "", "", "", "", "", ""]])
  let [turn, setturn] = useState("X")
  let [error,seterror]= useState(false)
  let [winnerName,setwinnerName]=useState("")

  const checkIfWinner=(arr)=>{
    for(let x=0;x<=6;x+=3){
      if(arr[x]==="X"&&arr[x+1]==="X"&&arr[x+2]==="X"){
        setwinnerName("X")
      }
    }

    for(let x=0;x<=6;x+=3){
      if(arr[x]==="O"&&arr[x+1]==="O"&&arr[x+2]==="O"){
        setwinnerName("O")
      }
    }

    for(let x=0;x<=2;x++){
      if(arr[x]==="X"&&arr[x+3]==="X"&&arr[x+6]==="X"){
        setwinnerName("X")
      }
    }

    for(let x=0;x<=2;x++){
      if(arr[x]==="O"&&arr[x+3]==="O"&&arr[x+6]==="O"){
        setwinnerName("O")
      }
    }

    if((arr[0]==="X"&&arr[4]==="X"&&arr[8]==="X")||(arr[2]==="X"&&arr[4]==="X"&&arr[6]==="X")){
      setwinnerName("X")
    }

    if((arr[0]==="O"&&arr[4]==="O"&&arr[8]==="O")||(arr[2]==="O"&&arr[4]==="O"&&arr[6]==="O")){
      setwinnerName("O")
    }

  }

  const change = (i) => {
    if (a[a.length - 1][i] === "") {
      seterror(false)
      let arr = []
      for (let x = 0; x < a[a.length - 1].length; x++) {
        if (x === i) {
          arr.push(turn)
          if (turn === "X") {
            setturn("O")
          }
          else {
            setturn("X")
          }
        }
        else {
          arr.push(a[a.length - 1][x])
        }
      }
      seta([...a, arr])
      checkIfWinner(arr)
    }
    else{
      seterror(true)
    }
  }

  const undo=()=>{
    let arr=[...a]
    arr.pop()
    seta(arr)
    if(turn==="X"){
      setturn("O")
    }
    else{
      setturn("X")
    }
  }

  const restart=()=>{
    seta([["", "", "", "", "", "", "", "", ""]])
    setturn("X")
    seterror(false)
    setwinnerName("")
  }

  return (
    <history.Provider value={{ a, change,error,turn,undo,restart,winnerName }}>
      {props.children}
    </history.Provider>
  )
}
export { history }
