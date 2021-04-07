import React from 'react';
import { Link } from 'react-router-dom';
import './ShopingPreview.scss';
export function ShopingPreview({ product, addToCart }) {
    console.log('addToCart:', addToCart);
    return (
        <Link to={'/product/' + product._id}>
            <div className='product-preview'>
                <img src={`https://robohash.org/${product._id}`} alt='' />
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h2>{product.details}</h2>
                <button onClick={addToCart}>add To Cart</button>
            </div>
        </Link>
    );
}
