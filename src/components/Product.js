import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Product.css';

const Product = ({
    id,
    name,
    deleteProductsCallback
}) => {
    const deleteFunc = () => {
        deleteProductsCallback(id);
    };

    return (
        <li className ='products-item'>
            {name}
            <button className="remove_product_button" onClick={deleteFunc}> 🗑️ </button>
        </li>
    );
};
export default Product;