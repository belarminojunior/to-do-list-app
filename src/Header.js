import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>
        <abbr title="Wonderr">WNDR</abbr> x {title}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
