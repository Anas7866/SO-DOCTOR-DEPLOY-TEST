import React from 'react'
import './Profile.scss'

function Profile() {
  return (
    <div className="col-md-12 mt-4" style={{ height: '80vh' }}>
      <div className="row">
        <div className="col-md-6 pl-md-4">
          <div className="col-md-12  background_card_one p-3">
            <div className="row pb-3">
              <div className="col-md-6 pt-2">
                <div className="row">
                  <div className="col-md-3 ">
                    <img
                      className="img-fluid height_of_image"
                      src="../images/profile.png"
                    />
                  </div>
                  <div className="col-md-9  px-1 m-auto">
                    <div className="col-md-12 px-0">
                      <p className="mb-0">Dr. Haseeb Shah</p>
                      <p className="mb-0 text_gray">Cardiologist</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <div className="col-md-12">
                  <i class="fas fa-edit"></i>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-outline-info btn-sm button_avaliable">
                    {' '}
                    Avaliable{' '}
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Email</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">haseeb786@hotmail.com</p>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Mobile</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">+44 7894085</p>
              </div>
            </div>
            <hr />
            <div className="row pb-3">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Clinic Name</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">London Clinic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pr-md-4">
          <div className="col-md-12  background_card_one p-3">
            <div className="row pb-3">
              <div className="col-md-6 pt-2">
                <div className="col-md-12 px-0">
                  <p className="mb-0">General info</p>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <div className="col-md-12 px-0">
                  <i class="fas fa-edit"></i>
                </div>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Email</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">haseeb786@hotmail.com</p>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Mobile</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">+44 7894085</p>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Clinic Name</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">London Clinic</p>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">Clinic Name</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">London Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
