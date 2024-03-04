
import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header>
      
    </header>
  );
};

export default Header;
