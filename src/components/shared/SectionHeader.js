import React from 'react'
import './SectionHeader.css'

function SectionHeader({
  side,
  header,
  withBg
}) {
  const titleStyle = withBg ? 'title-with-bg' : 'title-no-bg';
  const headerStyle = side ? "section-header-side" : ("row " + (withBg ? "section-header no-margin-top" : ""));
  return (
    <>
      <div className={headerStyle}>
				<p class={'wow fadeInLeft ' + titleStyle}>{header}</p>
			</div>
    </>
  )
}

export default SectionHeader