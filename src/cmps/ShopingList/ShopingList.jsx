import React from 'react';
import { ShopingPreview } from '../ShopingPreview';
import './ShopingList.scss';

export function ShopingList({ addToCart, Products }) {
    
    return (
        <div className='product-list'>
            {Products &&
                Products.map((product) => (
                    <ShopingPreview
                        product={product}
                        key={product._id}
                        addToCart={addToCart}
                    />
                ))}
        </div>
    );
}
