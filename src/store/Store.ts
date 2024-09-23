import { 
    configureStore 
} from "@reduxjs/toolkit";
import reducres from "./features/root_reducer";

const Store=configureStore({
    reducer:{
        ...reducres
    },
    devTools:true
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;
export default Store;