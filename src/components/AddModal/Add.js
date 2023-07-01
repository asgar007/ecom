// import React, {useEffect, useState} from 'react';

// import "./Add.scss";
// import { useSelector, useDispatch } from 'react-redux';
// import { setIsAddModalVisible } from '../../store/modalSlice';
// import { addToCart } from '../../store/cartSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { formatPrice } from '../../utils/helpers';
// import { lightGreen } from '@mui/material/colors';
// import { addProduct, getProduct } from '../../service/api';



// const Add = () => {
//     const { data: product } = useSelector(state => state.modal);
//     const dispatch = useDispatch();
//     const [item, setItem] = useState(product);
//     const {title, price, description} = item;

//     let navigate = useNavigate();

//     useEffect(()=>{
//         setItem(product);
//     },[]);

//   const addProductDetails = async() => {
//     const response = await addProduct(item);
//     // navigate('/all');
//   }

//   const onValueChange = (e) => {
//     console.log(e.target.name, e.target.value);
//     setItem({...item, [e.target.name]: e.target.value});
//     // console.log(item)
//   }

//   const modalOverlayHandler = (e) => {
//     if(e.target.classList.contains('overlay-bg')){
//       dispatch(setIsAddModalVisible(false));
//     }
//   }

//   return (
//     <div className='overlay-bg' onClick = {modalOverlayHandler}>
//       <div className = "product-details-modal bg-white">
//         <button type = "button" className='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsAddModalVisible(false))}>
//           <i className = "fas fa-times"></i>
//         </button>
//         <div id="modal" className='modal'>
//           <div className="modal-content">
//             <h2>Add Details</h2>
//             <form>
//               <label htmlFor="title">Title:</label>
//               <input onChange={(e) => onValueChange(e)} type="text" id="title" name="title" />

//               <label htmlFor="price">Price:</label>
//               <input onChange={(e) => onValueChange(e)} type="number" id="price" name="price" />

//               <label htmlFor="description">Description:</label>
//               <textarea onChange={(e) => onValueChange(e)} id="description" name="description"></textarea>

//               <button type="submit" onClick={() => addProductDetails()}>Save</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Add;

import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addProduct, getProduct } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    title: '',
    price: 0,
    description: '',
    images: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const Add = () => {
    const [product, setProduct] = useState(initialValue);
    const { title, price, description, images } = product;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h1">Add Product</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Image</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='images' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default Add;