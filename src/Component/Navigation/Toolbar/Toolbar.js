import React from "react";
import ToolbarItem from "./ToolbarItem";

export default function Toolbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Manthan Kotadiya
      </a>

      {/* <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#mynavigation'>
                <span className='navbar-toggler-icon'></span>
            </button><br /> */}
      <div className="footer-links text-center">
        <a href="https://github.com/manthankotadiya202" target="_blank">
          <i className="fa fa-github"></i>Github
        </a>
        <a
          href="https://linkedin.com/in/manthan-kotadiya-b90704152"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>LinkedIn
        </a>
      </div>
      {/* <div className='collapse navbar-collapse' id='mynavigation'>
                <ul className='navbar-nav ml-auto'>
                    <ToolbarItem/>
                </ul >

            </div > */}
    </nav>
  );
}
