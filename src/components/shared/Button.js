import React from 'react';
import './Button.css'
import {Link} from "react-router-dom";

function Button({content, link}) {
  return (
    <>
      <Link to={link} className="btn btn-primary text-uppercase">{content}</Link>
    </>
  )
}

export default Button
