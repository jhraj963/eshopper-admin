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
import EventAdd from './pages/Salesevents/EventAdd';
import Inventory from './pages/Inventory';
import InventoryAdd from './pages/Inventory/InventoryAdd';
import Allcustomers from './pages/Allcustomers';
import CustomerAdd from './pages/Allcustomers/CustomerAdd';
import Customergroups from './pages/Customergroups';
import Salesreports from './pages/Salesreports';
import Inventoryreports from './pages/Inventoryreports';
import Customerreports from './pages/Customerreports';
import Storesettings from './pages/Storesettings';
import Usermanagement from './pages/Usermanagement';
import Taxsettings from './pages/Taxsettings';
import Pages from './pages/Pages';
import Blog from './pages/Blog';
import BlogAdd from './pages/Blog/BlogAdd';
import FAQs from './pages/FAQs';
import Paymentgateways from './pages/Paymentgateways';
import Shippingproviders from './pages/Shippingproviders';
import Apps from './pages/Apps';
import Notifications from './pages/Notifications';
import Adduser from './pages/Adduser';
import Permissions from './pages/Permissions';
import Activitylog from './pages/Activitylog';
import Bulkupload from './pages/Bulkupload';
import Stockadjustments from './pages/Stockadjustments';
import Inventoryoverview from './pages/Inventoryoverview';
import Shippingmanagement from './pages/Shippingmanagement';
import Paymentprocessing from './pages/Paymentprocessing';
import Fulfillmentoverview from './pages/Fulfillmentoverview';
import Supporttickets from './pages/Supporttickets';
import Livechat from './pages/Livechat';
import Metatags from './pages/Metatags';
import URLmanagement from './pages/URLmanagement';
import Googleanalytics from './pages/Googleanalytics';
import Performancemetrics from './pages/Performancemetrics';
import Createbackup from './pages/Createbackup';
import Restorebackup from './pages/Restorebackup';
import Userguides from './pages/Userguides';
import Helpcenter from './pages/Helpcenter';
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

        <Route path={"/salesevents/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <EventAdd />
          </Protected>
        } />

        <Route path={"/salesevents/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <EventAdd />
          </Protected>
        } />

        <Route path={"/Inventory"} element={
          <Protected isSignedIn={isSignedIn} >
            <Inventory />
          </Protected>
        } />

        <Route path={"/inventory/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <InventoryAdd />
          </Protected>
        } />

        <Route path={"/inventory/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <InventoryAdd />
          </Protected>
        } />

        <Route path={"/Allcustomers"} element={
          <Protected isSignedIn={isSignedIn} >
            <Allcustomers />
          </Protected>
        } />

        <Route path={"/allcustomer/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAdd />
          </Protected>
        } />

        <Route path={"/allcustomer/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAdd />
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

         <Route path={"/blog/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <BlogAdd />
          </Protected>
        } />

        <Route path={"/blog/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <BlogAdd />
          </Protected>
        } />

        <Route path={"/FAQs"} element={
          <Protected isSignedIn={isSignedIn} >
            <FAQs />
          </Protected>
        } />

        <Route path={"/Paymentgateways"} element={
          <Protected isSignedIn={isSignedIn} >
            <Paymentgateways />
          </Protected>
        } />

        <Route path={"/Shippingproviders"} element={
          <Protected isSignedIn={isSignedIn} >
            <Shippingproviders />
          </Protected>
        } />

        <Route path={"/Apps"} element={
          <Protected isSignedIn={isSignedIn} >
            <Apps />
          </Protected>
        } />

        <Route path={"/Notifications"} element={
          <Protected isSignedIn={isSignedIn} >
            <Notifications />
          </Protected>
        } />

        <Route path={"/Adduser"} element={
          <Protected isSignedIn={isSignedIn} >
            <Adduser />
          </Protected>
        } />

        <Route path={"/Permissions"} element={
          <Protected isSignedIn={isSignedIn} >
            <Permissions />
          </Protected>
        } />

        <Route path={"/Activitylog"} element={
          <Protected isSignedIn={isSignedIn} >
            <Activitylog />
          </Protected>
        } />

        <Route path={"/Bulkupload"} element={
          <Protected isSignedIn={isSignedIn} >
            <Bulkupload />
          </Protected>
        } />

        <Route path={"/Stockadjustments"} element={
          <Protected isSignedIn={isSignedIn} >
            <Stockadjustments />
          </Protected>
        } />

        <Route path={"/Inventoryoverview"} element={
          <Protected isSignedIn={isSignedIn} >
            <Inventoryoverview />
          </Protected>
        } />

        <Route path={"/Shippingmanagement"} element={
          <Protected isSignedIn={isSignedIn} >
            <Shippingmanagement />
          </Protected>
        } />

        <Route path={"/Paymentprocessing"} element={
          <Protected isSignedIn={isSignedIn} >
            <Paymentprocessing />
          </Protected>
        } />

        <Route path={"/Fulfillmentoverview"} element={
          <Protected isSignedIn={isSignedIn} >
            <Fulfillmentoverview />
          </Protected>
        } />

        <Route path={"/Supporttickets"} element={
          <Protected isSignedIn={isSignedIn} >
            <Supporttickets />
          </Protected>
        } />

        <Route path={"/Livechat"} element={
          <Protected isSignedIn={isSignedIn} >
            <Livechat />
          </Protected>
        } />

        <Route path={"/Metatags"} element={
          <Protected isSignedIn={isSignedIn} >
            <Metatags />
          </Protected>
        } />

        <Route path={"/URLmanagement"} element={
          <Protected isSignedIn={isSignedIn} >
            <URLmanagement />
          </Protected>
        } />

        <Route path={"/Googleanalytics"} element={
          <Protected isSignedIn={isSignedIn} >
            <Googleanalytics />
          </Protected>
        } />

        <Route path={"/Performancemetrics"} element={
          <Protected isSignedIn={isSignedIn} >
            <Performancemetrics />
          </Protected>
        } />

        <Route path={"/Createbackup"} element={
          <Protected isSignedIn={isSignedIn} >
            <Createbackup />
          </Protected>
        } />

        <Route path={"/Restorebackup"} element={
          <Protected isSignedIn={isSignedIn} >
            <Restorebackup />
          </Protected>
        } />

        <Route path={"/Userguides"} element={
          <Protected isSignedIn={isSignedIn} >
            <Userguides />
          </Protected>
        } />

        <Route path={"/Helpcenter"} element={
          <Protected isSignedIn={isSignedIn} >
            <Helpcenter />
          </Protected>
        } />
        {/* <Route path="/" element={<Dashboard />} /> */}








      </Routes>
    </BrowserRouter>

  );
}

export default App;
