import React, { useEffect, useState } from 'react';
import { STATUS } from "../../utils/status";
import "./Category.scss";
import {Link} from "react-router-dom";
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { getProducts } from '../../service/api';



const Category = ({categories, status}) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts = async()=>{
        const items = await getProducts();
        setProducts(items.data);
    }

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
    <section className = "categories py-5 bg-ghost-white" id = "categories">
        <div className = "container">
            <div className = "categories-content">
                <div className='section-title'>
                    <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
                </div>
                <div className = "category-items grid">
                    {
                        products.slice(0, 5).map(product => (
                            // <Link to = {`category/${category.id}`} key = {category.id}>
                                <div className = "category-item" >
                                    <div className='category-item-img'>
                                        <img src = {product.category.image} alt = "" />
                                    </div>
                                    <div className = "category-item-name text-center">
                                        <h6 className='fs-20'>{product.category.name}</h6>
                                    </div>
                                </div>
                            // </Link>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category