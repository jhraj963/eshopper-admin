import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Sidebar() {

    const activeMenu = (e) => {
        document.querySelectorAll('.submenu').forEach(
            function (e) {
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if (childElement && childElement.classList.contains('submenu')) {
            childElement.classList.add('active');
        }
    }

    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <a href="#" className="nav-link">
                <div className="nav-profile-image">
                  <img src="assets/images/faces/face1.jpg" alt="profile"/>
                  <span className="login-status online"></span>
                  {/* <!--change to offline or busy as needed--> */}
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">Julfiqur Haidar Raja</span>
                  <span className="text-secondary text-small">Project Manager</span>
                </div>
                <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
          </li>
          
          <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Dashboard") ? 'active' : ''}`}>
            <Link to="/" className="sidebar-link nav-link">
              <span className="menu-title">Dashboard</span>
              <i data-feather="home" width="20" className="mdi mdi-home menu-icon"></i>

            </Link>
          </li>

         
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products">
              <span className="menu-title">Products</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-shopping menu-icon"></i>
            </a>
            <div className="collapse" id="products">
              <ul className="nav flex-column sub-menu">
                {/* <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">All Products</a></li> */}
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Addproduct") ? 'active' : ''}`}>
                  <Link to="/Addproduct" className="sidebar-link nav-link">
                      <span className="menu-title">All Product</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Categories") ? 'active' : ''}`}>
                  <Link to="/Categories" className="sidebar-link nav-link">
                      <span className="menu-title">Categories</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Inventory") ? 'active' : ''}`}>
                  <Link to="/Inventory" className="sidebar-link nav-link">
                    <span className="menu-title">Inventory</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#orders" aria-expanded="false" aria-controls="orders">
              <span className="menu-title">Orders</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-border-all menu-icon"></i>
            </a>
            <div className="collapse" id="orders">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Allorders") ? 'active' : ''}`}>
                  <Link to="/Allorders" className="sidebar-link nav-link">
                    <span className="menu-title">All Orders</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Orderstatus") ? 'active' : ''}`}>
                  <Link to="/Orderstatus" className="sidebar-link nav-link">
                    <span className="menu-title">Order Status</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Returns") ? 'active' : ''}`}>
                  <Link to="/Returns" className="sidebar-link nav-link">
                    <span className="menu-title">Returns</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#customers" aria-expanded="false" aria-controls="customers">
              <span className="menu-title">Customers</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-human-male-female menu-icon"></i>
              </a>
             <div className="collapse" id="customers">
                <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Allcustomers") ? 'active' : ''}`}>
                  <Link to="/Allcustomers" className="sidebar-link nav-link">
                    <span className="menu-title">All Customers</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Customergroups") ? 'active' : ''}`}>
                  <Link to="/Customergroups" className="sidebar-link nav-link">
                    <span className="menu-title">Customer Groups</span>
                  </Link>
                </li>
                </ul>
              </div>
          </li>
          
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Promotions" aria-expanded="false" aria-controls="Promotions">
              <span className="menu-title">Promotions</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-tag-multiple menu-icon"></i>
              </a>
            <div className="collapse" id="Promotions">
                <ul className="nav flex-column sub-menu">
                {/* <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Discount Codes
                </a></li> */}
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/discount") ? 'active' : ''}`}>
                  <Link to="/discount" className="sidebar-link nav-link">
                      <span className="menu-title">Discount Codes</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Salesevents") ? 'active' : ''}`}>
                  <Link to="/Salesevents" className="sidebar-link nav-link">
                      <span className="menu-title">Sales Events</span>
                  </Link>
                </li>
                </ul>
              </div>
          </li>
          
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Reports" aria-expanded="false" aria-controls="Reports">
              <span className="menu-title">Reports</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-calendar-text menu-icon"></i>
              </a>
            <div className="collapse" id="Reports">
                <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Salesreports") ? 'active' : ''}`}>
                  <Link to="/Salesreports" className="sidebar-link nav-link">
                      <span className="menu-title">Sales Reports</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Inventoryreports") ? 'active' : ''}`}>
                  <Link to="/Inventoryreports" className="sidebar-link nav-link">
                      <span className="menu-title">Inventory Reports</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Customerreports") ? 'active' : ''}`}>
                  <Link to="/Customerreports" className="sidebar-link nav-link">
                      <span className="menu-title">Customer Reports</span>
                  </Link>
                </li>
                </ul>
              </div>
          </li>
          
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Settings" aria-expanded="false" aria-controls="Settings">
              <span className="menu-title">Settings</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-settings menu-icon"></i>
              </a>
            <div className="collapse" id="Settings">
                <ul className="nav flex-column sub-menu">
                 <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Storesettings") ? 'active' : ''}`}>
                  <Link to="/Storesettings" className="sidebar-link nav-link">
                      <span className="menu-title">Store Settings</span>
                  </Link>
                </li>
                 <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Usermanagement") ? 'active' : ''}`}>
                  <Link to="/Usermanagement" className="sidebar-link nav-link">
                      <span className="menu-title">User Management</span>
                  </Link>
                </li>
                 <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Taxsettings") ? 'active' : ''}`}>
                  <Link to="/Taxsettings" className="sidebar-link nav-link">
                      <span className="menu-title">Tax Settings</span>
                  </Link>
                </li>
                </ul>
              </div>
          </li>
          
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Content" aria-expanded="false" aria-controls="Content">
              <span className="menu-title">Content</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-content-copy menu-icon"></i>
              </a>
            <div className="collapse" id="Content">
                <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Pages") ? 'active' : ''}`}>
                  <Link to="/Pages" className="sidebar-link nav-link">
                      <span className="menu-title">Pages</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Blog") ? 'active' : ''}`}>
                  <Link to="/Blog" className="sidebar-link nav-link">
                      <span className="menu-title">Blog</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/FAQs") ? 'active' : ''}`}>
                  <Link to="/FAQs" className="sidebar-link nav-link">
                      <span className="menu-title">FAQs</span>
                  </Link>
                </li>
                </ul>
              </div>
            </li>
          
            <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Integrations" aria-expanded="false" aria-controls="Integrations">
              <span className="menu-title">Integrations</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-source-merge menu-icon"></i>
              </a>
            <div className="collapse" id="Integrations">
                <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Paymentgateways") ? 'active' : ''}`}>
                  <Link to="/Paymentgateways" className="sidebar-link nav-link">
                    <span className="menu-title">Payment Gateways</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Shippingproviders") ? 'active' : ''}`}>
                  <Link to="/Shippingproviders" className="sidebar-link nav-link">
                    <span className="menu-title">Shipping Providers</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Apps") ? 'active' : ''}`}>
                  <Link to="/Apps" className="sidebar-link nav-link">
                    <span className="menu-title">Apps</span>
                  </Link>
                </li>
                </ul>
              </div>
            </li>
          
          <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Notifications") ? 'active' : ''}`}>
            <Link to="/Notifications" className="sidebar-link nav-link">
              <span className="menu-title">Notifications</span>
              <i data-feather="home" width="20" className="mdi mdi-alarm-light menu-icon"></i>

            </Link>
          </li>
          
          <li onClick={activeMenu} className={`nav-item ${isLinkActive("/#") ? 'active' : ''}`}>
            <Link to="/#" className="sidebar-link nav-link">
              <span className="menu-title"><h4>Submenu</h4></span>
              <i data-feather="home" width="20" className="mdi mdi-memory menu-icon"></i>

            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Management" aria-expanded="false" aria-controls="Management">
              <span className="menu-title">User Management</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-human menu-icon"></i>
            </a>
            <div className="collapse" id="Management">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Adduser") ? 'active' : ''}`}>
                  <Link to="/Adduser" className="sidebar-link nav-link">
                    <span className="menu-title">Add User</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Permissions") ? 'active' : ''}`}>
                  <Link to="/Permissions" className="sidebar-link nav-link">
                    <span className="menu-title">Permissions</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Activitylog") ? 'active' : ''}`}>
                  <Link to="/Activitylog" className="sidebar-link nav-link">
                    <span className="menu-title">Activity Log</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Inventory" aria-expanded="false" aria-controls="Inventory">
              <span className="menu-title">Inventory</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-briefcase-check menu-icon"></i>
            </a>
            <div className="collapse" id="Inventory">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Bulkupload") ? 'active' : ''}`}>
                  <Link to="/Bulkupload" className="sidebar-link nav-link">
                    <span className="menu-title">Bulk Upload</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Stockadjustments") ? 'active' : ''}`}>
                  <Link to="/Stockadjustments" className="sidebar-link nav-link">
                    <span className="menu-title">Stock Adjustments</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Inventoryoverview") ? 'active' : ''}`}>
                  <Link to="/Inventoryoverview" className="sidebar-link nav-link">
                    <span className="menu-title">Inventory Overview</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Fulfillment" aria-expanded="false" aria-controls="Fulfillment">
              <span className="menu-title">Fulfillment</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-border-horizontal menu-icon"></i>
            </a>
            <div className="collapse" id="Fulfillment">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Shippingmanagement") ? 'active' : ''}`}>
                  <Link to="/Shippingmanagement" className="sidebar-link nav-link">
                    <span className="menu-title">Shipping Management</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Paymentprocessing") ? 'active' : ''}`}>
                  <Link to="/Paymentprocessing" className="sidebar-link nav-link">
                    <span className="menu-title">Payment Processing</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Fulfillmentoverview") ? 'active' : ''}`}>
                  <Link to="/Fulfillmentoverview" className="sidebar-link nav-link">
                    <span className="menu-title">Fulfillment Overview</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Support" aria-expanded="false" aria-controls="Support">
              <span className="menu-title">Support</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-cloud-download menu-icon"></i>
            </a>
            <div className="collapse" id="Support">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Supporttickets") ? 'active' : ''}`}>
                  <Link to="/Supporttickets" className="sidebar-link nav-link">
                    <span className="menu-title">Support Tickets</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Livechat") ? 'active' : ''}`}>
                  <Link to="/Livechat" className="sidebar-link nav-link">
                    <span className="menu-title">Live Chat</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#SEO" aria-expanded="false" aria-controls="SEO">
              <span className="menu-title">SEO</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-search-web menu-icon"></i>
            </a>
            <div className="collapse" id="SEO">
              <ul className="nav flex-column sub-menu">
                 <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Metatags") ? 'active' : ''}`}>
                  <Link to="/Metatags" className="sidebar-link nav-link">
                    <span className="menu-title">Meta Tags</span>
                  </Link>
                </li>
                 <li onClick={activeMenu} className={`nav-item ${isLinkActive("/URLmanagement") ? 'active' : ''}`}>
                  <Link to="/URLmanagement" className="sidebar-link nav-link">
                    <span className="menu-title">URL Management</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Analytics" aria-expanded="false" aria-controls="Analytics">
              <span className="menu-title">Analytics</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-google-analytics menu-icon"></i>
            </a>
            <div className="collapse" id="Analytics">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Googleanalytics") ? 'active' : ''}`}>
                  <Link to="/Googleanalytics" className="sidebar-link nav-link">
                    <span className="menu-title">Google Analytics</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Performancemetrics") ? 'active' : ''}`}>
                  <Link to="/Performancemetrics" className="sidebar-link nav-link">
                    <span className="menu-title">Performance Metrics</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Backup" aria-expanded="false" aria-controls="Backup">
              <span className="menu-title">Backup</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-backup-restore menu-icon"></i>
            </a>
            <div className="collapse" id="Backup">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Createbackup") ? 'active' : ''}`}>
                  <Link to="/Createbackup" className="sidebar-link nav-link">
                    <span className="menu-title">Create Backup</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Restorebackup") ? 'active' : ''}`}>
                  <Link to="/Restorebackup" className="sidebar-link nav-link">
                    <span className="menu-title">Restore Backup</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Documentation" aria-expanded="false" aria-controls="Documentation">
              <span className="menu-title">Documentation</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-file-document menu-icon"></i>
            </a>
            <div className="collapse" id="Documentation">
              <ul className="nav flex-column sub-menu">
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Userguides") ? 'active' : ''}`}>
                  <Link to="/Userguides" className="sidebar-link nav-link">
                    <span className="menu-title">User Guides</span>
                  </Link>
                </li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Helpcenter") ? 'active' : ''}`}>
                  <Link to="/Helpcenter" className="sidebar-link nav-link">
                    <span className="menu-title">Help Center</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          
           
          </ul>
        </nav>
    )
}

export default Sidebar