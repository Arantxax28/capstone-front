import "./ProductForm.css";
import PropTypes from "prop-types";

import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";


const ProductForm = (props) => {
    const defaultProduct = {name:"", brand: "", category: "", price:"", purchaseDate:"", expirationDate:""};
    // const [isSubmitted,setIsSubmitted] = useState(false);

    const [productData, setProductData] = useState(defaultProduct);

    const getNewCounts = () => {
        props.getMakeupCallback();
        props.getSkincareCallback();
        props.getSubscriptionCallback();
    };

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
        getNewCounts()
    };

    return (
        <div className="new-item-page">
            <h2>ADD NEW ITEM</h2>
        {/*<>*/}
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

                {/*<select >*/}
                {/*    <option id= "Category" value={productData.category} name="Makeup" onSelect={handleFormInput}>Makeup</option>*/}
                {/*    <option id = "Category" value={productData.category} name="Skincare" onSelect={handleFormInput}>Skincare</option>*/}
                {/*    <option id = "Category" value={productData.category} name="Subscriptions" onSelect={handleFormInput}>Subscriptions</option>*/}
                {/*</select>*/}

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
            {/*{props.status === 0 && <p></p>}*/}
            {/*{props.status === 1 && <p>Your item has been added!</p>}*/}
            {/*{props.status === 2 && (*/}
            {/*    <p>"Product could not be added. Please fill out form."</p>*/}
            {/*)}*/}

        </form>

        {/*</>*/}
        </div>
    );

};
ProductForm.protoTypes = {
    makeNewProductCallback: PropTypes.func.isRequired,

}

export default ProductForm;