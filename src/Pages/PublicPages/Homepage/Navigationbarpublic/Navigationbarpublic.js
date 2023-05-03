import React from 'react'
import './Navigationbarpublic.scss'

function Navigationbarpublic() {
  return (
    <div className="col-md-12 background_color_header_public py-4">
      <div className="col-md-12 custome_main_setting_for_every_page navigation_for_laptop">
        <div className="row">
          <div className="col-md-1">
            <img className="img-fluid logo_width" src="../images/logo.png" />
          </div>
          <div className="col-md-6 text-center m-auto">
            <div className="row">
              <div className="col-md-3">
                <p className="mb-0 font_header">Home</p>
              </div>
              <div className="col-md-3">
                <p className="mb-0 font_header">How it work</p>
              </div>
              <div className="col-md-3">
                <p className="mb-0 font_header">About Us</p>
              </div>
              <div className="col-md-3">
                <p className="mb-0 font_header">Contact Us</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 m-auto">
            <div className="row">
              <div className="col-md-8">
                <input
                  className="form-control rounded-pill input_style"
                  placeholder="Search here.."
                  type="text"
                />
              </div>
              <div className="col-md-4 text-right">
                <img className="img-fluid" src="../images/profile.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation  */}
      <div className="col-md-12 custome_main_setting_for_every_page navigation_for_mobile">
        <div className="row">
          <div className="col-md-6 col-6">
            <img
              className="img-fluid logo_width_for_mobile"
              src="../images/logo.png"
            />
          </div>
          <div className="col-md-6 col-6 text-right">
            <button className="btn btn-light">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigationbarpublic
