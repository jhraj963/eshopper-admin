import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Icons from './pages/Icons';
import Addproduct from './pages/Addproduct';
// import Addproduct from './pages/Addproduct/ProductAdd';
import Allorders from './pages/Allorders';
import Categories from './pages/Categories';
import CategoriesAdd from './pages/Categories/CategoriesAdd';
import Discount from './pages/Discount';
import DiscountAdd from './pages/Discount/DiscountAdd';
import Protected from './components/protected';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const isSignedIn = localStorage.getItem("access_token") || false;

  return (

      <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path={"/"} element={
          <Protected isSignedIn={isSignedIn} >
            <Dashboard />
          </Protected>
        } />
        
        <Route path={"/Icons"} element={
          <Protected isSignedIn={isSignedIn} >
            <Icons />
          </Protected>
        } />

        <Route path={"/Addproduct"} element={
          <Protected isSignedIn={isSignedIn} >
            <Addproduct />
          </Protected>
        } />

        {/* <Route path={"/Addproduct/ProductAdd"} element={
          <Protected isSignedIn={isSignedIn} >
            <Addproduct />
          </Protected>
        } /> */}

        <Route path={"/Allorders"} element={
          <Protected isSignedIn={isSignedIn} >
            <Allorders />
          </Protected>
        } />

        <Route path={"/Categories"} element={
          <Protected isSignedIn={isSignedIn} >
            <Categories />
          </Protected>
        } />

        <Route path={"/Categories/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <CategoriesAdd />
          </Protected>
        } />

        <Route path={"/Categories/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <CategoriesAdd />
          </Protected>
        } />

        <Route path={"/discount"} element={
          <Protected isSignedIn={isSignedIn} >
            <Discount />
          </Protected>
        } />

        <Route path={"/discount/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DiscountAdd />
          </Protected>
        } />

        <Route path={"/discount/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <DiscountAdd />
          </Protected>
        } />

        {/* <Route path="/" element={<Dashboard />} /> */}





        


      </Routes>
      </BrowserRouter>
     
  );
}

export default App;
