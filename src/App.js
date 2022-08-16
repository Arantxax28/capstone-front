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
import UsePie from "./components/UsePie";


const App = () => {
    const [products, setProducts] = useState([]);
    const url = 'https://dm-capstone.herokuapp.com/products';

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

    //filters products so only the products in given categories are returned
    const expiringUnsorted =products.filter(product => product.daysLeft <= 30)
    const makeupItems =products.filter(product => product.category ==="Makeup")
    const skincareItems =products.filter(product => product.category ==="Skincare")
    const subscriptionItems =products.filter(product => product.category ==="Subscriptions")

    const expiring = expiringUnsorted.sort((a, b) => (a.daysLeft > b.daysLeft) ? 1 : -1)

    //gets total usage for each category to be used in usage pie chart
    const sumCount = products.reduce((currentSum, product) => {
        return currentSum + product.useCount;
    }, 0);
    const sumMakeupCount = makeupItems.reduce((currentSum, product) => {
        return currentSum + product.useCount;
    }, 0);
    const sumSkincareCount = skincareItems.reduce((currentSum, product) => {
        return currentSum + product.useCount;
    }, 0);
    const sumSubscriptionsCount = subscriptionItems.reduce((currentSum, product) => {
        return currentSum + product.useCount;
    }, 0);

    console.log("All",sumCount);
    console.log("makeup",sumMakeupCount);
    console.log("skin",sumSkincareCount);
    console.log("sub",sumSubscriptionsCount);

    //sets product state to the products in each category, used to display product list
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
        axios.delete(`https://dm-capstone.herokuapp.com/products/${id}`)
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
            .patch(`https://dm-capstone.herokuapp.com/products/increment/${id}`)
            .then((response) => {
                const newProductData = products.map((product) => {
                    if (product.id === id) {
                        product.useCount++;
                        product.costPerUse = product.price/product.useCount;
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

    const removeOneUse = (id) => {
        axios
            .patch(`https://dm-capstone.herokuapp.com/products/decrement/${id}`)
            .then((response) => {
                const updatedProductData = products.map((product) => {
                    if (product.id === id) {
                        product.useCount--;
                        product.costPerUse = product.price/product.useCount;
                    }
                    return product;
                });
                setProducts(updatedProductData);
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
                <Route path="/" element={<Home sumCount={sumCount} makeupCount={sumMakeupCount} skincareCount={sumSkincareCount} subscriptionsCount={sumSubscriptionsCount} expiring={expiring} skincareItems={skincareItems} subscriptionItems={subscriptionItems} makeupItems={makeupItems} getWeekdayCallback={getWeekday} getProductsFromAPICallback={getProductsFromAPI} getMakeupCallback={getMakeup} getSkincareCallback={getSkincare} getSubscriptionCallback={getSubscriptions}>
                </Home>}/>
                <Route path="products" element={
                    <ProductList  products={products} removeOneUseCallback={removeOneUse} addOneUseCallback={addOneUse} deleteProductsCallback={deleteProducts} getProductsFromAPICallback={getProductsFromAPI}/>}
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
