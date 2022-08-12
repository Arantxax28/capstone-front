import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ExpiringProduct.css';

const ExpiringProduct = ({
    id,
    name,
    brand,
    daysLeft,
    deleteProductsCallback
}) => {
    const deleteFunc = () => {
        deleteProductsCallback(id);
    };

    return (
        <li className ='expiring-item'>
            <span>{name}</span>
            <span>{brand}</span>
            <span>{daysLeft}</span>
        </li>
    );
};
export default ExpiringProduct;