import React from 'react'

function SocialMedia() {

  const iconStyle = { filter: "brightness(60%)" };

  return (
    <>
      <a href="https://www.facebook.com/nhakhoalucci" style={iconStyle} target="_blank">
        <img src='/icons/icon-fb.png' alt="Facebook" className="mr-3"/>
      </a>
      <a href="https://www.instagram.com/luccidental" style={iconStyle} target="_blank">
        <img src='/icons/icon-insta.png' alt="Instagram" className="mr-3"/>
      </a>
      <a href="https://www.youtube.com/channel/UCXYaG8ibaCeoDAc9Kb0FtvQ" style={iconStyle} target="_blank">
        <img src='/icons/icon-youtube.png' alt="Youtube" className="mr-3"/>
      </a>
    </>
  )
}

export default SocialMedia
