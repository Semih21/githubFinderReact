import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  //   const { title, icon } = props;
  return (
    <nav className="nav bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
