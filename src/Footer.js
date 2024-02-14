import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        Devoloped by <a href="#">Simão Júnior</a>
      </p>

      <p>{length === 1 ? "Task" : "Tasks"}</p>
    </footer>
  );
};

export default Footer;
