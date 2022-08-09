import React from "react";
import {Link} from "react-router-dom";
import ProductList from './components/ProductList.js';
import ProductForm from './components/ProductForm.js';
import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';
import { PieChart, Pie, Legend} from 'recharts';

const App = () => {
    const [makeupCount, setMakeupCount] = useState(0);
    const [skincareCount, setSkincareCount] = useState(0);
    const [subscriptionCount, setSubscriptionCount] = useState(0);
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:8080/api/products';
    const makeupLink = 'http://localhost:8080/api/category/1/products'
    const skincareLink = 'http://localhost:8080/api/category/2/products'
    const subscriptionLink = 'http://localhost:8080/api/category/3/products'

    useEffect(() => {
        getProductsFromAPI();
        getMakeupFromAPI();
        getSkincareFromAPI();
        getSubscriptionsFromAPI();
    }, []);

    const getProductsFromAPI = () => {
        axios.get(url)
            .then((response) => {
                setProducts(response.data);
                console.log(".then",response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };
    console.log(products.length)
    const getMakeupFromAPI = () => {
        axios.get(makeupLink)
            .then((response) => {
                setMakeupCount(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getSkincareFromAPI = () => {
        axios.get(skincareLink)
            .then((response) => {
                setSkincareCount(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };

    const getSubscriptionsFromAPI = () => {
        axios.get(subscriptionLink)
            .then((response) => {
                setSubscriptionCount(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Couldn't get products!");
            });
    };


    const data = [
        {name: "Makeup", items: makeupCount.length},
        {name: "Skincare", items: skincareCount.length},
        {name: "Subscriptions", items: subscriptionCount.length},
    ]
    //     for(let product in products) {
    //         if (product.category_id === 1) {
    //             makeupTally ++;
    //         }
    //         return makeupTally
    //     }
    // };
    //
    // const deleteProducts = (id) => {
    //     axios.delete(`http://localhost:8080/products/${id}`)
    //         .then((response) => {
    //             const updatedProducts = products.filter((product) => product.id !== id);
    //             setProducts(updatedProducts);
    //         })
    //         .catch((error) => {
    //             console.log(`Unable to delete product with id ${id}!`);
    //         });
    // };

    // const makeNewProduct = (data) => {
    //     console.log(data);
    //     axios.post(url, data)
    //         .then((response) => {
    //             getProductsFromAPI();
    //         })
    //         .catch((error) => {
    //             console.log("Could not add product!");
    //         });
    // };

  return (
  <div className="container">
    <header>
      <h1>Hey, there!</h1>
    </header>
    <main>
        <section className="right-side">
            <h2>MY ITEMS</h2>
            <section className="categories">
                <Link to="/makeup">
                    <span className="items">MAKEUP</span>
                </Link>
                <Link to="/skincare">
                    <span className="items">SKINCARE</span>
                </Link>
                <Link to="/subscriptions">
                    <span className="items">SUBSCRIPTIONS</span>
                </Link>
                <Link to="/products">
                    <span className="items">ALL</span>
                </Link>
            </section>
            <Link to="/new">
                <h2 className="add-item">ADD NEW ITEMS</h2>
            </Link>
        </section>
        <section className="left-side">

            <PieChart width={250} height={250} title="Monthly Breakdown Purchased">
                <Pie data={data} dataKey="items" outerRadius={80} fill="teal" label="name"/>
            </PieChart>
            <Legend
                orientation="horizontal"
                itemTextPosition="right"
                horizontalAlignment="center"
                verticalAlignment="bottom"
                columnCount={4} />
        </section>
        {/*<div>*/}
        {/*    <h2>Add New Items</h2>*/}
        {/*    <section className="form-section">*/}
        {/*    <ProductForm makeNewProductCallback={makeNewProduct}/>*/}
        {/*    </section>*/}
        {/*</div>*/}
        {/*<div className="product-list">*/}
        {/*    <h2>MY ITEMS</h2>*/}
        {/*    <section className="product-scroll">*/}
        {/*    <ProductList*/}
        {/*        products = {products}*/}
        {/*        deleteProductsCallback = {deleteProducts}/>*/}
        {/*    </section>*/}
        {/*</div>*/}
    </main>
  </div>
  );
}

export default App;
