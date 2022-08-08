import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';
import axios from "axios";
import {Link} from "react-router-dom";

const SubscriptionList = () => {
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:8080/api/category/3/products';

    useEffect(() => {
        getProductsFromAPI();
    }, []);

    const getProductsFromAPI = () => {
        axios.get(url)
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const deleteProducts = (id) => {
        axios.delete(`http://localhost:8080/api/products/${id}`)
            .then((response) => {
                const updatedProducts = products.filter((product) => product.id !== id);
                setProducts(updatedProducts);
            })
            .catch((error) => {
                console.log(`Unable to delete product with id ${id}!`);
            });
    };
    return (
        <div className="products-page">
            <h2>MY ITEMS</h2>
            <section className="list-header">
                <span>Product</span>
                <span>Brand</span>
                <span>Purchase Date</span>
                <span>Expiration Date</span>
                <span>Price</span>
                <span>Remove</span>
            </section>
            <ul className="list">
                {products.map((item) => (
                    <li key={item.id} className="list-item">
                        <div className= "item-entry">
                            <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
                                <section className="item-info">
                                    <span>{item.name}</span>
                                    <span>{item.brand}</span>
                                    <span>{item.purchaseDate}</span>
                                    <span>{item.expirationDate}</span>
                                    <span>{item.price}</span>
                                </section>
                            </Link>
                            <button id="delete-item" onClick={() => deleteProducts(item.id)}>
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/" className="home-link">
                {/*<br />*/}
                Return to Dashboard
            </Link>
        </div>
    );

};
export default SubscriptionList;