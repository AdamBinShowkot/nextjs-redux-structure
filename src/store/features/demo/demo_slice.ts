import { 
    createSlice 
} from "@reduxjs/toolkit";
import { 
    demo_slice_interface 
} from "@/intefaces/store/demo_slice.interface";

const init_state:demo_slice_interface={
    count:0,
    data:[]
}

const demo_slice=createSlice({
    name:'demo_slice',
    initialState:init_state,
    reducers:{
        increment:(state:any,action:any)=>{
            state.count+=1;
        },
        decrement:(state:any,action:any)=>{
            state.count-=1;
        }
    }
})

export const {
    increment,
    decrement
}=demo_slice.actions;

export default demo_slice.reducer;