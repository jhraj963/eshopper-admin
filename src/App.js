import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Icons from './pages/Icons';
import Addproduct from './pages/Addproduct';
import ProductAdd from './pages/Addproduct/ProductAdd';
import Allorders from './pages/Allorders';
import Orderstatus from './pages/Orderstatus';
import Returns from './pages/Returns';
import Categories from './pages/Categories';
import CategoriesAdd from './pages/Categories/CategoriesAdd';
import Discount from './pages/Discount';
import DiscountAdd from './pages/Discount/DiscountAdd';
import Salesevents from './pages/Salesevents';
import Inventory from './pages/Inventory';
import Allcustomers from './pages/Allcustomers';
import Customergroups from './pages/Customergroups';
import Salesreports from './pages/Salesreports';
import Inventoryreports from './pages/Inventoryreports';
import Customerreports from './pages/Customerreports';
import Storesettings from './pages/Storesettings';
import Usermanagement from './pages/Usermanagement';
import Taxsettings from './pages/Taxsettings';
import Pages from './pages/Pages';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
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

        <Route path={"/addproduct"} element={
          <Protected isSignedIn={isSignedIn} >
            <Addproduct />
          </Protected>
        } />

        <Route path={"/addproduct/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <ProductAdd />
          </Protected>
        } />

        <Route path={"/addproduct/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <ProductAdd />
          </Protected>
        } />
        {/* <Route path={"/Addproduct/ProductAdd"} element={
          <Protected isSignedIn={isSignedIn} >
            <ProductAdd />
          </Protected>
        } /> */}

        <Route path={"/Allorders"} element={
          <Protected isSignedIn={isSignedIn} >
            <Allorders />
          </Protected>
        } />

        <Route path={"/Orderstatus"} element={
          <Protected isSignedIn={isSignedIn} >
            <Orderstatus />
          </Protected>
        } />

        <Route path={"/Returns"} element={
          <Protected isSignedIn={isSignedIn} >
            <Returns />
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

        <Route path={"/Salesevents"} element={
          <Protected isSignedIn={isSignedIn} >
            <Salesevents />
          </Protected>
        } />

        <Route path={"/Inventory"} element={
          <Protected isSignedIn={isSignedIn} >
            <Inventory />
          </Protected>
        } />

        <Route path={"/Allcustomers"} element={
          <Protected isSignedIn={isSignedIn} >
            <Allcustomers />
          </Protected>
        } />

        <Route path={"/Customergroups"} element={
          <Protected isSignedIn={isSignedIn} >
            <Customergroups />
          </Protected>
        } />

        <Route path={"/Salesreports"} element={
          <Protected isSignedIn={isSignedIn} >
            <Salesreports />
          </Protected>
        } />

        <Route path={"/Inventoryreports"} element={
          <Protected isSignedIn={isSignedIn} >
            <Inventoryreports />
          </Protected>
        } />

        <Route path={"/Customerreports"} element={
          <Protected isSignedIn={isSignedIn} >
            <Customerreports />
          </Protected>
        } />

        <Route path={"/Storesettings"} element={
          <Protected isSignedIn={isSignedIn} >
            <Storesettings />
          </Protected>
        } />

        <Route path={"/Usermanagement"} element={
          <Protected isSignedIn={isSignedIn} >
            <Usermanagement />
          </Protected>
        } />

        <Route path={"/Taxsettings"} element={
          <Protected isSignedIn={isSignedIn} >
            <Taxsettings />
          </Protected>
        } />

        <Route path={"/Pages"} element={
          <Protected isSignedIn={isSignedIn} >
            <Pages />
          </Protected>
        } />

        <Route path={"/Blog"} element={
          <Protected isSignedIn={isSignedIn} >
            <Blog />
          </Protected>
        } />

        <Route path={"/FAQs"} element={
          <Protected isSignedIn={isSignedIn} >
            <FAQs />
          </Protected>
        } />
        {/* <Route path="/" element={<Dashboard />} /> */}





        


      </Routes>
      </BrowserRouter>
     
  );
}

export default App;
