import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialType = {
    isOpen:boolean,
    status:string,
    message:string,
    isSend:boolean,
}

const initialState = {
    isOpen:false,
    status:"",
    message:"",
    isSend:false,
}

const OpenCloseFormSlice = createSlice({
    name:'openCloseForm',
    initialState,
    reducers: {
        closeForm(state: InitialType){
            state.isOpen = false;
            state.status = '';
            state.message='';
            state.isSend=false;

        },

        openForm(state:InitialType, action:PayloadAction<InitialType>){
            state.isOpen = true;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.isSend = true;
        }
    }
})

export default OpenCloseFormSlice;
export const formActions = OpenCloseFormSlice.actions;