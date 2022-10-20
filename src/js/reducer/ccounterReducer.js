import { DECREMENT, INCREMENT, TEXT, TOGGLE } from "../actionsTypes/actiontypes";

const initState={
    count:10,
    show:false, text:""
}

export const counterReducer = (state=initState,action) => { 
    
 switch (action.type) {
    case INCREMENT:
        return {...state,count:state.count+1}
    case DECREMENT:
        return {...state,count:state.count && state.count-1}
 case TOGGLE:
            return {...state,show:!state.show}

            case TEXT:
                return {...state,text:action.payload}
    default:
        return state
 }

 }