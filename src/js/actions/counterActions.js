import { DECREMENT, INCREMENT, TEXT, TOGGLE } from "../actionsTypes/actiontypes"

export const increment = () => { 
    
    return {
        type:INCREMENT
    }
 }
 export const decrement = () => { 
    return {
        type:DECREMENT
    }
  }
  export const showcounter = () => { 
    return { type:TOGGLE}
   }
   export const writetext = (vstr) => { 
    return {
        type:TEXT,
        payload:vstr
    }
    }