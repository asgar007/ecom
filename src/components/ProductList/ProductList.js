import React, { useState } from 'react';
import { STATUS } from '../../utils/status';
import "./ProductList.scss";
import { setModalData, setIsModalVisible, setIsEditModalVisible, setIsAddModalVisible } from '../../store/modalSlice';
import { deleteProduct } from '../../store/productSlice'
import SingleProduct from '../SingleProduct/SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Edit from '../EditModal/Edit';
import Add from '../AddModal/Add';

const ProductList = ({products, status}) => {
    const [items, setItems] = useState(products);
    const dispatch = useDispatch();
    const {isModalVisible, isEditModalVisible, isAddModalVisible} = useSelector((state) => state.modal);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }
    /* DELETE */
    const deleteItem = (i) => {
        dispatch(deleteProduct(i));
        alert("Item Deleted successfully!!")
    }
    /* UPDATE */
    const viewEditModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsEditModalVisible(true));
        alert("Item Updated Successfully!!!");
    }

    /* ADD A Product */
    // const viewAddModalHandler = (data) => {
    //     dispatch(setModalData(data));
    //     dispatch(setIsAddModalVisible(true));
    //     alert("Item Added Successfully!!!");
    // }

    /* LOW TO HIGH */
    const lowToHigh = ()=>{
        products.sort((a, b) => a.price - b.price);
        setItems(products);
    }

    /* High TO LOW */
    const highToLow = ()=>{
        products.sort((a, b) => a.price - b.price);
        setItems(products);
    }
    

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
        <section className='product py-5 bg-ghost-white' id = "products">
            { isModalVisible && <SingleProduct />}
            { isEditModalVisible && <Edit />}
            {/* { isAddModalVisible && <Add />} */}

            <div className='container'>
                {/* <div className='addProduct'>
                    <button onClick = {() => viewEditModalHandler()}>Add product</button>
                </div> */}
                <div className='sort'>
                    <div className="dropdown">
                        <button className="dropbtn">Sort Order</button>
                        <div className="dropdown-content">
                            <a onClick={lowToHigh}>Low to High</a>
                            <a onClick={highToLow}>High to Low</a>
                        </div>
                    </div>
                </div>
                <div className='product-content'>
                    <div className='section-title'>
                        <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>Our Products</h3>
                    </div>
                    <div className='product-items grid'>
                        {
                            products.slice(0, 20).map(product => (
                                <div className='product-item bg-white'>
                                    <div className='product-item-img'>
                                        <img src = {product.images[0]} alt = "" />
                                        <div className = "product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">{product.category.name}</div>
                                        <div className = "product-item-button1 text-white fs-13 bg-regal-blue " key = {product.id} onClick = {() => viewModalHandler(product)}><i class="fa-solid fa-plus"></i></div>
                                        <div className = "product-item-button2 text-white fs-13 bg-regal-blue " key = {product.id} onClick = {() => viewEditModalHandler(product)} ><i class="fas fa-edit"></i></div>
                                        <div className = "product-item-button3 text-white fs-13 bg-regal-blue " onClick={()=> deleteItem(product.id)} ><i class="fa-solid fa-trash"></i></div>
                                    </div>
                                    <div className='product-item-body'>
                                        <h6 className = "product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                                        <div className = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList