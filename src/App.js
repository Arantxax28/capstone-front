import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';

import ProductList from './components/ProductList.js';
import ProductForm from './components/ProductForm.js';
import './App.css';
import Home from "./components/Home";
import ProductListByCategory from "./components/ProdcuttListByCategory";

const App = () => {
    const [products, setProducts] = useState([]);
    // const [status, setStatus] = useState(0);
    const [makeupCount, setMakeupCount] = useState(0);
    const [skincareCount, setSkincareCount] = useState(0);
    const [subscriptionsCount, setSubscriptionsCount] = useState(0);
    const [url, setUrl] = useState('http://localhost:8080/products')
    // const url = 'http://localhost:8080/products';

    useEffect(() => {
        getProductsFromAPI();
    }, []);

    const getMakeup = event => {
        setUrl('http://localhost:8080/products/makeup');
    };

    const getSkincare = event => {
        setUrl('http://localhost:8080/products/skincare');
    };

    const getSubscriptions = event => {
        setUrl('http://localhost:8080/products/subscriptions');
    };

    // const blankMessage = event => {
    //     setStatus(0);
    // };

    const getWeekday = () => {
        const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let hoy= new Date();
        console.log('hoy', hoy)
        return dayList[hoy.getDay()];
    }


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

    const createNewProduct = (data) => {
        console.log(data);
        axios.post('http://localhost:8080/products', data)
            .then((response) => {
                getProductsFromAPI();
            })
            // .then(() => {
            //     setStatus(1);
            // })
            .catch((error) => {
                // setStatus(2);
                console.log("Could not add product!");
            });
    };


    return (
        <div className="container">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home getWeekdayCallback={getWeekday} getMakeupCallback={getMakeup} getSkincareCallback={getSkincare} getSubscriptionCallback={getSubscriptions}/>}/>
                <Route path="products" element={
                    <ProductList products={products} makeupCount={makeupCount} skincareCount={skincareCount} subscriptionsCount={subscriptionsCount} deleteProductsCallback={deleteProducts}/>}
                />
                <Route path=":category" element={<ProductListByCategory products={products} deleteProductsCallback={deleteProducts}/>} />
                <Route path="new" element={
                    <ProductForm createNewProductCallback={createNewProduct}/>}
                />
            </Routes>
            </BrowserRouter>
        </div>
        );
    }


export default App;
