import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        Devoloped by{" "}
        <a href="https://github.com/belarminojunior">Simão Júnior</a>
      </p>

      <p>
        {length}
        {length === 1 ? "Task" : "Tasks"}
      </p>
    </footer>
  );
};

export default Footer;
