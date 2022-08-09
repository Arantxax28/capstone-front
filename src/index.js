import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product.js";
import ProductForm from "./components/ProductForm.js";
import ProductList from "./components/ProductList";
import MakeupList from "./components/MakeupList";
import SkincareList from "./components/SkincareList";
import SubscriptionList from "./components/SubscriptionList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="new" element={<ProductForm />} />
            <Route path="/" element={<App />} />
            <Route path="products" element={<ProductList />} />
            <Route path="makeup" element={<MakeupList />} />
            <Route path="skincare" element={<SkincareList />} />
            <Route path="subscriptions" element={<SubscriptionList />} />
            <Route path=":id" element={<Product />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
