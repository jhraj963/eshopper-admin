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
                  <span className="font-weight-bold mb-2">David Grey. H</span>
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

            {/* <li className="nav-item">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Dashboard</span>
                <i className="mdi mdi-home menu-icon"></i>
              </a>
            </li> */}
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products">
              <span className="menu-title">Products</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-shopping menu-icon"></i>
            </a>
            <div className="collapse" id="products">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">All Products</a></li>
                <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Addproduct") ? 'active' : ''}`}>
                  <Link to="/Addproduct" className="sidebar-link nav-link">
                      <span className="menu-title">Add Product</span>
                  </Link>
                </li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Categories</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Inventory</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">All Orders</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Order Status</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Returns</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">All Customers</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Customer Groups</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Discount Codes
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Sales Events</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Sales Reports
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Inventory Reports</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Customer Reports</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Store Settings
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">User Management</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Tax Settings</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Pages
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Blog</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">FAQs</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Payment Gateways
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Shipping Providers</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Apps</a></li>
                </ul>
              </div>
            </li>
          
          <li onClick={activeMenu} className={`nav-item ${isLinkActive("/#") ? 'active' : ''}`}>
            <Link to="/#" className="sidebar-link nav-link">
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

          {/* <li onClick={activeMenu} className={`nav-item ${isLinkActive("/#") ? 'active' : ''}`}> 
            <h4>Additional Submenu</h4>
          </li> */}

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#Management" aria-expanded="false" aria-controls="Management">
              <span className="menu-title">User Management</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-human menu-icon"></i>
            </a>
            <div className="collapse" id="Management">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Add User
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Permissions</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Activity Log</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Bulk Upload
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Stock Adjustments</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Shipping Management
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Payment Processing</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Support Tickets
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Live Chat</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Meta Tags
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">URL Management</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Google Analytics
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Performance Metrics</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Create Backup
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Restore Backup</a></li>
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
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">User Guides
                </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Help Center</a></li>
              </ul>
            </div>
          </li>
          
            {/* <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Basic UI Elements</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="pages/icons/mdi.html">
                <span className="menu-title">Icons</span>
                <i className="mdi mdi-contacts menu-icon"></i>
              </a>
            </li> */}

             <li onClick={activeMenu} className={`nav-item ${isLinkActive("/Icons") ? 'active' : ''}`}>
              <Link to="/Icons" className="sidebar-link nav-link">
                  <span className="menu-title">Icons</span>
                  <i data-feather="home" width="20" className="mdi mdi-contacts menu-icon"></i>
                  
              </Link>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="pages/forms/basic_elements.html">
                <span className="menu-title">Forms</span>
                <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              </a>
            </li> */}
          
            {/* <li className="nav-item">
              <a className="nav-link" href="pages/charts/chartjs.html">
                <span className="menu-title">Charts</span>
                <i className="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li> */}
          
            {/* <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <span className="menu-title">Tables</span>
                <i className="mdi mdi-table-large menu-icon"></i>
              </a>
            </li> */}
          
            {/* <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                <span className="menu-title">Sample Pages</span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-medical-bag menu-icon"></i>
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                </ul>
              </div>
             </li> */}
{/*           
            <li className="nav-item sidebar-actions">
              <span className="nav-link">
                <div className="border-bottom">
                  <h6 className="font-weight-normal mb-3">Projects</h6>
                </div>
                <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
                <div className="mt-4">
                  <div className="border-bottom">
                    <p className="text-secondary">Categories</p>
                  </div>
                  <ul className="gradient-bullet-list mt-4">
                    <li>Free</li>
                    <li>Pro</li>
                  </ul>
                </div>
              </span>
            </li> */}
          </ul>
        </nav>
    )
}

export default Sidebar