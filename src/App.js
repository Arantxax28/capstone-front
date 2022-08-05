import React from "react";
import {Link} from "react-router-dom";
import ProductList from './components/ProductList.js';
import ProductForm from './components/ProductForm.js';
import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';

const App = () => {
    // const [products, setProducts] = useState([]);
    // const url = 'http://localhost:8080/products';
    //
    // useEffect(() => {
    //     getProductsFromAPI();
    // }, []);
    //
    // const getProductsFromAPI = () => {
    //     axios.get(url)
    //         .then((response) => {
    //             setProducts(response.data);
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.log("Couldn't get products!");
    //         });
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
        {/*<input*/}
        {/*    type="submit"*/}
        {/*    value="MY ITEMS"*/}
        {/*    onClick={onClickShowProductlist}*/}
        {/*/>*/}
        {/*{showProductList ? <ProductList /> : ""}*/}
        <Link to="/items">
            <h2 className="items">MY ITEMS</h2>
        </Link>
        <section className="categories">
            <span>Makeup</span>
            <span>Skincare</span>
            <span>Subscriptions</span>
            <span>All</span>
        </section>
        <Link to="/new">
            <h2 className="add-item">ADD NEW ITEMS</h2>
        </Link>
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
