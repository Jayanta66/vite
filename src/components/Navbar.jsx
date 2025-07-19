import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            Experience
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="https://jayanta66.github.io/successcochingcenter/" className="nav_items">
            Success Coching Center
          </a>

          

          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#freelancing" className="nav_items">
            Freelancing sites
          </a>


          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
