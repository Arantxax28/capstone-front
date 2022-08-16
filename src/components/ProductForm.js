import "./ProductForm.css";
import PropTypes from "prop-types";

import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";


const ProductForm = (props) => {
    const defaultProduct = {name:"", brand: "", category: "", price:"", purchaseDate:"", expirationDate:""};

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
        alert('You added: ' + productData.name);
        event.preventDefault();
        props.createNewProductCallback(productData);
        setProductData(defaultProduct);
    };

    return (
        <div    className="form-page-all">
        <div className="form-page-container">

        <div className="new-item-page">
            <h2>ADD NEW ITEM</h2>
            <section className="page-right">
                <div className="makeup-right"></div>
                <div className="skincare-right"></div>
                <div className="subscription-right"></div>
            </section>
        <form onSubmit={handleFormSubmission} >
            <section className="form-block">
            <label htmlFor="Name">Name</label>
            <input id="Name" name="name" type="text" required value={productData.name} onChange={handleFormInput}/>

            <label htmlFor="Brand">Brand</label>
            <input
                id="Brand" name="brand" type="text" required value={productData.brand} onChange={handleFormInput}/>

            <label htmlFor="Category">Category</label>
                <input placeholder="Select a category" type="text" list="categories" name="category" onSelect={handleFormInput}/>
                <datalist id="categories">
                    <option name="category0" value="1"  disabled="disabled">Select A Category</option>
                    <option name="category1" value="Makeup">Makeup</option>
                    <option name="category2" value="Skincare">Skincare</option>
                    <option name="category3" value="Subscriptions">Subscriptions</option>
                </datalist>

            <label htmlFor="Price">Price</label>
            <input
                id="Price" name="price" type="text" required value={productData.price} onChange={handleFormInput}/>

            <label htmlFor="Purchase Date">Purchase Date</label>
            <input
                id="Purchase Date" name="purchaseDate" type="text" placeholder="yyyy-mm-dd" required value={productData.purchaseDate} onChange={handleFormInput}/>

            <label htmlFor="Expiration Date">Expiration Date</label>

            <input
                id="Expiration Date" name="expirationDate" type="text" placeholder="yyyy-mm-dd" required value={productData.expirationDate} onChange={handleFormInput}/>
            </section>

            <section className="form-buttons">
            <input className="submit-button" type="submit" value="Add Item"/>
            <Link to="/" className="home-link" >
                Return to Dashboard
            </Link>
            </section>
        </form>

        </div>
        </div>
        </div>
    );

};
ProductForm.protoTypes = {
    makeNewProductCallback: PropTypes.func.isRequired,

}

export default ProductForm;