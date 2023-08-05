import React from "react";
import { COPYRIGHT_SYMBOL, CURRENT_YEAR, STARTUP_NAME } from "../constants";

const Footer = () => {
  return (
    <footer>
      <p>
        {COPYRIGHT_SYMBOL} {CURRENT_YEAR} {STARTUP_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
