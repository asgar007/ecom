import React, {useEffect, useState} from 'react';

import "./Add.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setIsAddModalVisible } from '../../store/modalSlice';
import { addToCart } from '../../store/cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { lightGreen } from '@mui/material/colors';
import { addProduct, getProduct } from '../../service/api';



const Add = () => {
    const { data: product } = useSelector(state => state.modal);
    const dispatch = useDispatch();
    const [item, setItem] = useState(product);
    const {title, price, description} = item;

    let navigate = useNavigate();

    useEffect(()=>{
        setItem(product);
    },[]);

  const addProductDetails = async() => {
    const response = await addProduct(item);
    // navigate('/all');
  }

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setItem({...item, [e.target.name]: e.target.value});
    // console.log(item)
  }

  const modalOverlayHandler = (e) => {
    if(e.target.classList.contains('overlay-bg')){
      dispatch(setIsAddModalVisible(false));
    }
  }

  return (
    <div className='overlay-bg' onClick = {modalOverlayHandler}>
      <div className = "product-details-modal bg-white">
        <button type = "button" className='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsAddModalVisible(false))}>
          <i className = "fas fa-times"></i>
        </button>
        <div id="modal" className='modal'>
          <div className="modal-content">
            <h2>Add Details</h2>
            <form>
              <label htmlFor="title">Title:</label>
              <input onChange={(e) => onValueChange(e)} type="text" id="title" name="title" />

              <label htmlFor="price">Price:</label>
              <input onChange={(e) => onValueChange(e)} type="number" id="price" name="price" />

              <label htmlFor="description">Description:</label>
              <textarea onChange={(e) => onValueChange(e)} id="description" name="description"></textarea>

              <button type="submit" onClick={() => addProductDetails()}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add;