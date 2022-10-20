import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, writetext } from './../js/actions/counterActions';

const Counter = () => {
    const count=useSelector((state)=>state.count)
    const vstr=useSelector((state)=>state.text)
    const dispatch=useDispatch()
  return (
    <div>
<div>
<button onClick={()=>dispatch(increment())}>+</button>
<p> {count} </p>
<button onClick={()=>dispatch(decrement())}>-</button>
</div>
<input type="text" onChange={(e)=>dispatch(writetext(e.target.value))} />

<p>{vstr ? vstr :"exmpl"}</p>
    </div>
  )
}

export default Counter