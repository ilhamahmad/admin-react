import React from 'react'
import { Link } from 'react-router-dom'


export default function Aside() {
    return (
       
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img src="dist/img/user2-160x160.png" alt="ilhamahmad" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">ilhamahmad</span>
      </Link>
      <div className="sidebar">
       
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Main
                  {/* <span className="right badge badge-danger">New</span> */}
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-plus-square" />
                <p>
                 Post
                  <i className="fas fa-angle-left right" />
                  {/* <span className="badge badge-info right">6</span> */}
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/posts" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>Posts</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addpost" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Post</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    )
}
