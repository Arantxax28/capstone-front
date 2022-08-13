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
    useCount,
    costPerUse,
    deleteProductsCallback,
    addOneUseCallback
}) => {
    const deleteFunc = () => {
        deleteProductsCallback(id);
    };
    const addOneFunc = () => {
        addOneUseCallback(id);
    };

    const roundedCost = Math.round(costPerUse*100)/100


    return (
        <li className ='products-item'>
            <span>{name}</span>
            <span>{brand}</span>
            <span>{purchaseDate}</span>
            <span>{expirationDate}</span>
            <span>{price}</span>
            <span>{daysLeft}</span>
            <span>{roundedCost}</span>
            <span>{useCount}</span>
            <button className="remove_product_button" onClick={addOneFunc}>➕️</button>
            <button className="remove_product_button" onClick={deleteFunc}> ✂️</button>
        </li>
    );
};
export default Product;