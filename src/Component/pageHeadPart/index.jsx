import React from 'react'
import './style.scss'

function PageHeadPart({h2text}) {
  return (
    <div className="aboutContainer">
    <div className="abouthead">
        <h2>  {h2text}</h2>
    </div>
</div>
  )
}

export default PageHeadPart