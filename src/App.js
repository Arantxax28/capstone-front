import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';

import ProductList from './components/ProductList.js';
import ProductForm from './components/ProductForm.js';
import './App.css';
import Home from "./components/Home";
import CategoryPie from "./components/CategoryPie";


const App = () => {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState([]);
    const [expiring, setExpiring] = useState([]);
    const [makeup, setMakeup] = useState([]);
    const [skincare, setSkincare] = useState([]);
    const [subscriptions, setSubscriptions] = useState(0);
    const url = 'http://localhost:8080/products';

    useEffect(() => {
        getProductsFromAPI();
        getMakeupCount();
        getSkincareCount();
        getSubscriptionsCount();
        expiringSoon()
    }, []);

    console.log(makeup)
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

    const getMakeupCount = () => {
        axios.get('http://localhost:8080/products/makeup')
            .then((response) => {
                setMakeup(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getSkincareCount = () => {
        axios.get('http://localhost:8080/products/skincare')
            .then((response) => {
                setSkincare(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getSubscriptionsCount = () => {
        axios.get('http://localhost:8080/products/subscriptions')
            .then((response) => {
                setSubscriptions(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getMakeup = () => {
        axios.get('http://localhost:8080/products/makeup')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getSkincare = event => {
        axios.get('http://localhost:8080/products/skincare')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getSubscriptions = event => {
        axios.get('http://localhost:8080/products/subscriptions')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
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
            // .then(() => {
            //     setStatus(1);
            // })
            .catch((error) => {
                // setStatus(2);
                console.log("Could not add product!");
            });
    };

    const expiringSoon = () =>{
        axios.get(url)
            .then((response) => {
                const expiringProducts = products.filter((product) => product.daysLeft <= 30);
                setExpiring(expiringProducts);
            })
            .catch((error)=> {
                console.log('Unable to get expiring products');
            })
    };


    return (
        <div className="container">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home expired={expiring} makeup={makeup} skincare={skincare} subscriptions={subscriptions} getWeekdayCallback={getWeekday} getProductsFromAPICallback={getProductsFromAPI} getMakeupCallback={getMakeup} getSkincareCallback={getSkincare} getSubscriptionCallback={getSubscriptions}>
                    <CategoryPie expired={expiring}/>
                </Home>}/>
                <Route path="products" element={
                    <ProductList products={products} deleteProductsCallback={deleteProducts}/>}
                />
                <Route path="new" element={
                    <ProductForm createNewProductCallback={createNewProduct}/>}
                />
            </Routes>
            </BrowserRouter>
        </div>
        );
    }


export default App;
