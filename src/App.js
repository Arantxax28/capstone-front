import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';

import ProductList from './components/ProductList.js';
import ProductForm from './components/ProductForm.js';
import './App.css';
import Home from "./components/Home";
import CategoryPie from "./components/CategoryPie";
import Countdown from "./components/Countdown";


const App = () => {
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:8080/products';

    useEffect(() => {
        getProductsFromAPI();
    }, []);

    const getProductsFromAPI = () => {
        axios.get(url)
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
                console.log(url);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const expiring =products.filter(product => product.daysLeft <= 30)
    const makeupItems =products.filter(product => product.category ==="Makeup")
    const skincareItems =products.filter(product => product.category ==="Skincare")
    const subscriptionItems =products.filter(product => product.category ==="Subscriptions")

    const getMakeup = () => {
                setProducts(makeupItems);
    };

    const getSkincare = () => {
        setProducts(skincareItems);
    };

    const getSubscriptions = () => {
                setProducts(subscriptionItems);
    };

    const getWeekday = () => {
        const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let hoy= new Date();
        console.log('hoy', hoy)
        return dayList[hoy.getDay()];
    }


    const deleteProducts = (id) => {
        axios.delete(`http://localhost:8080/products/${id}`)
            .then((response) => {
                const updatedProducts = products.filter((product) => product.id !== id);
                setProducts(updatedProducts);
            })
            .catch((error) => {
                console.log(`Unable to delete product with id ${id}!`);
            });
    };
    console.log(products)
    const createNewProduct = (data) => {
        console.log(data);
        axios.post(url, data)
            .then((response) => {
                getProductsFromAPI();
            })
            .catch((error) => {
                console.log("Could not add product!");
            });
    };

    const addOneUse = (id) => {
        axios
            .patch(`http://localhost:8080/products/${id}`)
            .then((response) => {
                const newProductData = products.map((product) => {
                    if (product.id === id) {
                        product.useCount++;
                    }
                    return product;
                });
                setProducts(newProductData);
            })
            .catch((error) => {
                console.log(error);
                console.log("could not update use count");
            });
    };


    return (
        <div className="container">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home expiring={expiring} skincareItems={skincareItems} subscriptionItems={subscriptionItems} makeupItems={makeupItems} getWeekdayCallback={getWeekday} getProductsFromAPICallback={getProductsFromAPI} getMakeupCallback={getMakeup} getSkincareCallback={getSkincare} getSubscriptionCallback={getSubscriptions}>
                    <CategoryPie />
                    <Countdown/>
                </Home>}/>
                <Route path="products" element={
                    <ProductList  products={products} addOneUseCallback={addOneUse} deleteProductsCallback={deleteProducts} getProductsFromAPICallback={getProductsFromAPI}/>}
                />
                <Route path="new" element={
                    <ProductForm createNewProductCallback={createNewProduct} getMakeupCallback={getMakeup} getSkincareCallback={getSkincare} getSubscriptionCallback={getSubscriptions}/>}
                />
            </Routes>
            </BrowserRouter>
        </div>
        );
    }


export default App;
