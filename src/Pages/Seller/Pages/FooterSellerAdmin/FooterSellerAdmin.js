import React from 'react'
import "./FooterSellerAdmin.scss"

function FooterSellerAdmin() {
  return (
    <div className='col-sm-12  border_footer  text-left pt-4'>
      <div className='container-fluid px-5'>
       <div className='row'>
        <div className='col-sm-6'>
        <p className="mb-2 heading_rating_card" >&copy; Nami, Inc., or its subsidiaries, 2022. All rights reserved. </p>
        <p className="mb-2 heading_rating_card" >As applicable, MicroAcquire Brokerage Services, Inc., CA DRE # 01862195 · v14.4.0p (07a5a1a) </p>
        </div>
        <div className='col-sm-6 text-right'>
        <p className="mb-2 heading_rating_card" >If you have any questions or need help, please contact us <span className="heading_rating_card1">atsupport@nami.com</span></p>
        </div>
       </div>
       </div>
        </div>
  )
}

export default FooterSellerAdmin