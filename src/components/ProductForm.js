import "./ProductForm.css";
import PropTypes from "prop-types";

import React from 'react';
import {useState} from 'react';

const defaultProduct = {name:"", brand: "", category: "", price:0.00, purchaseDate:"2022-01-01", expirationDate:"2022-01-01"};

const ProductForm = (props) => {

    const [productData, setProductData] = useState(defaultProduct);

    const handleFormInput = (event) => {
        const inputElement = event.target;
        const name = inputElement.name;
        const value = inputElement.value;

        const newProductData = {...productData};
        newProductData[name] = value;
        setProductData(newProductData);
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();
        props.makeNewProductCallback(productData);
    };

    return (
        <form onSubmit={handleFormSubmission} >
            <label htmlFor="Name">Name</label>
            <input id="Name" name="name" type="text" value={productData.name} onChange={handleFormInput}/>

            <label htmlFor="Brand">Brand</label>
            <input
                id="Brand" name="brand" type="text" value={productData.brand} onChange={handleFormInput}/>

            <label htmlFor="Category">Category</label>
            <input
                id="Category" name="category" type="text" value={productData.category} onChange={handleFormInput}/>

            <label htmlFor="Price">Price</label>
            <input
                id="Price" name="price" type="text" value={productData.price} onChange={handleFormInput}/>

            <label htmlFor="Purchase Date">Purchase Date</label>
            <input
                id="Purchase Date" name="purchaseDate" type="text" value={productData.purchaseDate} onChange={handleFormInput}/>

            <label htmlFor="Expiration Date">Expiration Date</label>
            <input
                id="Expiration Date" name="expirationDate" type="text" value={productData.expirationDate} onChange={handleFormInput}/>

            <input type="submit"/>


        </form>

    );

};

ProductForm.protoTypes = {
    makeNewProductCallback: PropTypes.func.isRequired,

}

export default ProductForm;