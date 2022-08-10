import "./ProductForm.css";
import PropTypes from "prop-types";

import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";


const ProductForm = (props) => {
    const defaultProduct = {name:"", brand: "", category: "", price:"", purchaseDate:"", expirationDate:""};
    // const [isSubmitted,setIsSubmitted] = useState(false);

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
        props.createNewProductCallback(productData);
        setProductData(defaultProduct);
    };

    // const submitForm = async (productData) => {
    //     console.log("Submission starting");
    //     const result = await props.createNewProductCallback(productData);
    //     console.log("Submitting complete", result.success);
    //     setIsSubmitted(result.success);
    // };

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
                <select required value={productData.category} onChange={handleFormInput}>
                    <option name="Makeup">Makeup</option>
                    <option name="Skincare">Skincare</option>
                    <option name="Subscriptions">Subscriptions</option>
                </select>

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
            <Link to="/" className="home-link">
                Return to Dashboard
            </Link>
            <input className="submit-button" type="submit" value="Add Item"/>
            </section>
            {props.status === 0 && <p></p>}
            {props.status === 1 && <p>Your item has been added!</p>}
            {props.status === 2 && (
                <p>"Product could not be added. Please fill out form."</p>
            )}

        </form>

        {/*</>*/}
        </div>
    );

};
ProductForm.protoTypes = {
    makeNewProductCallback: PropTypes.func.isRequired,

}

export default ProductForm;