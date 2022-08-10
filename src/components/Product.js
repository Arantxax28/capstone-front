import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Product.css';

const Product = ({
    id,
    name,
    brand,
    purchaseDate,
    expirationDate,
    price,
    deleteProductsCallback
}) => {
    const deleteFunc = () => {
        deleteProductsCallback(id);
    };

    return (
        <li className ='products-item'>
            <span>{name}</span>
            <span>{brand}</span>
            <span>{purchaseDate}</span>
            <span>{expirationDate}</span>
            <span>{price}</span>
            <button className="remove_product_button" onClick={deleteFunc}> 🗑️ </button>
        </li>
    );
};
export default Product;