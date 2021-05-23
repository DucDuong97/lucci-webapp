import React from 'react';
import './Button.css'

function Button({content, link}) {
  return (
    <>
      <a href={link} class="btn btn-primary text-uppercase">{content}</a>
    </>
  )
}

export default Button
