import React from "react";
import { FaCircle, FaPen, FaTimes } from "react-icons/fa";
function Icon({ name }) {
  if (name == "circle") {
    return <FaCircle />;
  } else if (name == "cross") {
    return <FaTimes />;
  } else {
    return <FaPen />;
  }
}

export default Icon;
