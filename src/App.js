import React from "react";
import ProductList from './components/ProductList.js';
import ProductForm from './components/ProductForm.js';
import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';

const App = () => {
  const[products, setProducts] = useState([]);
  const url ='http://localhost:8080/products';

  useEffect(() => {
    getProductsFromAPI();
  },[]);

  const getProductsFromAPI = () => {
    axios.get(url)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => {console.log("Couldn't get products!");});
  };

  const deleteProducts = (id) => {
    axios.delete(`http://localhost:8080/products/${id}`)
        .then((response) =>{
          const updatedProducts = products.filter((product) => product.id !==id);
          setProducts(updatedProducts);
        })
        .catch((error) => {
            console.log(`Unable to delete product with id ${id}!`);
        });
  };

  const makeNewProduct = (data) => {
      console.log(data);
      axios.post(url, data)
          .then((response) => {
              getProductsFromAPI();
          })
          .catch((error) => {
              console.log("Could not add product!");
          });
  };

  return (
  <body className={"container"}>
    <header>
      <h1>Hey, there!</h1>
    </header>
    <main>
        <div>
            <h2>Add New Items</h2>
            <section className="board-section">
            <ProductForm makeNewProductCallback={makeNewProduct}/>
            </section>
        </div>
        <div className="product-list">
            <h2>My Items</h2>
            <ProductList
                products = {products}
                deleteProductsCallback = {deleteProducts}/>
        </div>
    </main>
  </body>
  );
}

export default App;
