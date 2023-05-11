import Container from 'react-bootstrap/Container'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { logout } from '../../../Store/Auth/actions'
import './HeaderAdmin.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Dropdown from './Dropdown.tsx'

function NavScrollExample(props) {
  const { showside, setSidenav } = props
  const dispatch = useDispatch()
  const [userSetting, setUserSetting] = useState(false)
  let history = useHistory()
  const sidebartoggler = () => {
    setSidenav(!showside)
    console.log('------->', showside)
  }

  return (
    <div className="col-sm-12 border_bottom_header py-2 ">
      <div className="row">
        <div className="col-md-6">
          <h1>Profile</h1>
          {showside ? null : (
            <p>
              <button className="btn  btn-warning" onClick={sidebartoggler}>
                X
              </button>
            </p>
          )}
        </div>
        <div className="col-md-6 text-right m-auto">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(logout())}
          >
            {' '}
            Logout{' '}
          </button>
        </div>
      </div>

      {/* <div class="dropdown dropleft ">
        <Dropdown />
        <Popover
          trigger="legacy"
          placement="bottom-start"
          isOpen={userSetting}
          target="Popover1"
          className="profileSettingPopover"
          toggle={() => setUserSetting(!userSetting)}
          onClick={() => setUserSetting(!userSetting)}
        >
          <PopoverBody>
          
          </PopoverBody>
        </Popover>
      </div> */}
    </div>
  )
}

export default NavScrollExample
