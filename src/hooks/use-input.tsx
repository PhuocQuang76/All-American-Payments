import React, {useReducer} from "react";

type InitialStateType = {
    value:string,
    isTouched:boolean,
}

type ActionType = {
    type: 'INPUT' | 'BLUR' | 'RESET',
    value:string,
}

const initialState : InitialStateType= {
    value:"",
    isTouched: false,
}


const reducer = (state:InitialStateType, action:ActionType) => {
    if(action.type == 'INPUT'){
        return{
            value:action.value,
            isTouched: state.isTouched,
        }
    }

    if(action.type == 'BLUR'){
        return{
            value:action.value,
            isTouched: true,
        }
    }

    if(action.type == 'RESET'){
        return{
            value:"",
            isTouched: false,
        }
    }
    return{
        value:"",
        isTouched: false,
    }
}

const useInput = (validateValue:(value:string)=>boolean) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const valueIsValid = validateValue(state.value) ;
    const hasError = !valueIsValid && state.isTouched;
    const valueChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:'INPUT', value:event.target.value});
    }

    const valueBlurHandler = () => {
        dispatch({type:'BLUR', value: state.value})
    }

    const reset = () => {
        dispatch({
            type:'RESET',
            value:'',
        })

    }

    //return what ever you want to return.
    return {
        value: state.value,
        isValid: valueIsValid,
        hasError: hasError,
        reset:reset,
        valueChangeHandler: valueChangeHandler,
        valueBlurHandler: valueBlurHandler,
    }
}

export default useInput;