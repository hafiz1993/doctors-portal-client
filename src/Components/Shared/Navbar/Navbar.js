/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            {/* margin left(mr/ml) */}
          <li class="nav-item active">
            <Link class="nav-link mr-5" to ="/" >
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <Link to = "/allPatients" class="nav-item">
            <a class="nav-link mr-5" href="#">
              Patient
            </a>
          </Link>
          <Link  class="nav-item">
            <Link to = "/dashboard" class="nav-link mr-5" >
              DashBoard
            </Link>
          </Link>
          
          <Link class="nav-item">
            <a class="nav-link mr-5 text-white" href="#">
             Admin
            </a>
          </Link>
          <Link class="nav-item">
            <a class="nav-link mr-5 text-white" href="#">
              Blogs
            </a>
          </Link>
          <Link  class="nav-item">
            <a class="nav-link mr-5 text-white" href="#">
              Contact Us
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
