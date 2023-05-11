import React from 'react'
import '../Sidenav/Sidenav.scss'
import { Link } from 'react-router-dom'

function Sidenav(props) {
  const { showside, setSidenav } = props
  const sidebartoggler = () => {
    setSidenav(!showside)
    console.log('------->', showside)
  }
  return (
    <div className="sidenav_hight_fixed">
      <div className="col-md-12 ">
        <div className="col-md-12 px-0 pt-4">
          <div className="row">
            <div className="col-md-3 px-2">
              <img src="../images/logo.png" className="img-fluid " />{' '}
            </div>
            <div className="col-md-6 px-0 m-auto">
              <b className="size_font_dashboard">Second Opinion</b>
            </div>
            <div className="col-md-3 m-auto ">
              <button
                className="btn  btn-light btn-sm "
                onClick={sidebartoggler}
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 px-2 mt-5">
        <div className="col-md-12  background_color_tab_notactive py-3 mb-2">
          <Link to="/Dashboard-Admin" className="link_style_noneactive">
            <p className="mb-0 dashboard_bold_active">
              <i class="fas fa-home"></i> &nbsp;Dashboard
            </p>
          </Link>
        </div>
        <div className="col-md-12  background_color_tab_active py-3">
          <Link to="/Profile" className="link_style">
            <p className="mb-0 dashboard_bold_active">
              <i class="fas fa-user-alt"></i> &nbsp;Profile
            </p>
          </Link>
        </div>
        <div className="col-md-12  background_color_tab_notactive py-3 mb-2 mt-2">
          <Link to="/Tickets" className="link_style_noneactive">
            <p className="mb-0 dashboard_bold_active">
              <i class="fas fa-ticket-alt"></i> &nbsp;Sessions
            </p>
          </Link>
        </div>
        <div className="col-md-12  background_color_tab_notactive py-3 mb-2">
          <p className="mb-0 dashboard_bold_active">
            <i class="fas fa-question-circle"></i> &nbsp;Question Answers
          </p>
        </div>
        <div className="col-md-12  background_color_tab_notactive py-3 mb-2">
          <Link to="/Myaccount" className="link_style_noneactive">
            <p className="mb-0 dashboard_bold_active">
              <i class="fas fa-wallet"></i> &nbsp;My Account
            </p>
          </Link>
        </div>
      </div>
      <div className="col-md-12  background_color_tab_notactive_end py-3 mb-2">
        <p className="mb-0 dashboard_bold_active">
          <i class="fas fa-comment-medical"></i> &nbsp;Contact Admin
        </p>
      </div>
    </div>
  )
}

export default Sidenav
