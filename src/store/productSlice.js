import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response = await fetch(`${BASE_URL}products`);
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch(error){
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },

    reducers: {
        setProducts(state, action){
            state.data = action.payload;
            // console.log(state.data[0])
        },
        setStatus(state, action){
            state.status = action.payload;
        },
        deleteProduct(state, action){
            // state.data = action.payload;
            const newItems = state.data.filter((product)=> product.id != action.payload);
            state.data = newItems;
        }
    },
});

export const {setProducts, setStatus, deleteProduct} = productSlice.actions;
export default productSlice.reducer;


