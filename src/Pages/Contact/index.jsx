import React from 'react'
import'./style.scss'
import PageHeadPart from '../../Component/pageHeadPart'

function Contact() {
  return (
    <div>
        <div className="contactContainer">
            <div className="Contact">
                <PageHeadPart h2text={'Contact'}></PageHeadPart>
            </div>

            <div className="contactFoot">
              <div className="contactFootLeft">
                <div className="contactFootLeftContent">
                  <h4>Send Us A Message</h4>
               <div className='contactInput'>  
               <input type="text" placeholder='enter your text'/>
               </div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className="contactFootRight">
                <div>addres</div>
                <div>Lets Talk</div>
                <div>Sale Support</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact