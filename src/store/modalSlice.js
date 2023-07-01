import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        data: [],
        isModalVisible: false,
        isEditModalVisible: false,
        isAddModalVisible: false
    },
    reducers: {
        setModalData(state, action){
            state.data = action.payload;
        },
        setIsModalVisible(state, action){
            state.isModalVisible = action.payload;
        },
        setIsEditModalVisible(state, action){
            state.isEditModalVisible = action.payload
        },
        setIsAddModalVisible(state, action){
            state.isAddModalVisible = action.payload
        }
    }
});

export const { setModalData, setIsModalVisible, setIsEditModalVisible, setIsAddModalVisible} = modalSlice.actions;
export default modalSlice.reducer;

