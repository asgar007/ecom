import React, {useEffect, useState} from 'react';

import "./Edit.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setIsEditModalVisible } from '../../store/modalSlice';
import { addToCart } from '../../store/cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { lightGreen } from '@mui/material/colors';
import { editProduct, getProduct } from '../../service/api';



const Edit = () => {
    const { data: product } = useSelector(state => state.modal);
    const dispatch = useDispatch();
    const [item, setItem] = useState(product);
    const {title, price, description} = item;

    let navigate = useNavigate();

    useEffect(()=>{
        setItem(product);
    },[]);

  const editProductDetails = async() => {
    const response = await editProduct(product.id, item);
    // navigate('/all');
  }

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setItem({...item, [e.target.name]: e.target.value});
    // console.log(item)
  }

  const modalOverlayHandler = (e) => {
    if(e.target.classList.contains('overlay-bg')){
      dispatch(setIsEditModalVisible(false));
    }
  }

  return (
    <div className='overlay-bg' onClick = {modalOverlayHandler}>
      <div className = "product-details-modal bg-white">
        <button type = "button" className='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsEditModalVisible(false))}>
          <i className = "fas fa-times"></i>
        </button>
        <div id="modal" className='modal'>
          <div className="modal-content">
            <h2>Edit Details</h2>
            <form>
              <label htmlFor="title">Title:</label>
              <input onChange={(e) => onValueChange(e)} type="text" id="title" name="title" />

              <label htmlFor="price">Price:</label>
              <input onChange={(e) => onValueChange(e)} type="number" id="price" name="price" />

              <label htmlFor="description">Description:</label>
              <textarea onChange={(e) => onValueChange(e)} id="description" name="description"></textarea>

              <button type="submit" onClick={() => editProductDetails()}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit;