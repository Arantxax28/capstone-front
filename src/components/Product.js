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
    daysLeft,
    deleteProductsCallback
}) => {
    const deleteFunc = () => {
        deleteProductsCallback(id);
    };

    const expiringSoon = () =>{
        if(daysLeft<=52){
            return name;
        }
    }
    console.log(expiringSoon())

    return (
        <li className ='products-item'>
            <span>{name}</span>
            <span>{brand}</span>
            <span>{purchaseDate}</span>
            <span>{expirationDate}</span>
            <span>{price}</span>
            <span>{daysLeft}</span>
            <button className="remove_product_button" onClick={deleteFunc}> ✂️</button>
        </li>
    );
};
export default Product;