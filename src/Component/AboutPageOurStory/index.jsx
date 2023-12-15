import React from 'react'
import './style.scss'

function OurStory({h2text,ptext,p2text,p3text}) {
  return (
    <section>
        <div className="ourStoryContainer">
            <div className="ourStory">
                <div className="ourStoryLeft">
                    <div className="ourStoryLeftText">
                        <h2>{h2text}</h2>
                    <p>{ptext}</p>
                    <p>
                        {p2text}
                    </p>
                    <p>{p3text}</p>
                    </div>
                    
                    
                </div>
                <div className="ourStoryRight">
                    <div className="ourStoryRightBorder">
                        
                    </div>
                    <div className="ourStoryRightimg">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="ourStory">
                <div className="ourStoryRight">
                    <div className="ourStoryRightBorder">

                    </div>
                    <div className="ourStoryRightimg">
                        <img src="	https://preview.colorlib.com/theme/cozastore/images/about-02.jpg
                        " alt="" />
                    </div>
                </div>
                <div className="ourStoryLeft">
                    <div className="ourStoryLeftText">
                        <h2>{h2text}</h2>
                    <p>{ptext}</p>
                    <p>
                        {p2text}
                    </p>
                    <p>{p3text}</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurStory