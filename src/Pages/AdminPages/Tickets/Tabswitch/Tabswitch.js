import React, { useState } from 'react'
import '../Ticket.scss'

function Tabswitch() {
  const [Tab, setTab] = useState(1)
  const tabone = () => {
    setTab(2)
  }
  const tabtwo = () => {
    setTab(1)
  }
  return (
    <>
      {Tab === 1 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2">
            <div className="col-md-6">
              <span className="active_tab">
                <b>Open Tickets</b>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="non_active_tab" onClick={tabone}>
                Close Tickets
              </span>
            </div>
            <div className="col-md-6 text-right">
              <h6 className="color_h6_opentickts">
                Number of Open Tickets : 54
              </h6>
            </div>
          </div>
          {/* <hr className="my-2" /> */}
          <div className="col-md-12 mt-2 px-0 height_fix_list">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Patient Image</th>
                  <th scope="col">Patient Id</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <img
                      className="img-fluid height_of_image1"
                      src="../images/profile.png"
                    />
                  </th>
                  <td>102245</td>
                  <td> Mark Jhon Shentm</td>
                  <td>17 June, Monday at 9:00 am</td>
                  <td>
                    <button className="btn btn-success rounded-pill px-4 background_accept">
                      {' '}
                      Accept{' '}
                    </button>{' '}
                    &nbsp;
                    <button className="btn btn-danger rounded-pill px-4 background_reject">
                      {' '}
                      Decline
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : Tab === 2 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2">
            <div className="col-md-6">
              <span onClick={tabtwo} className="non_active_tab">
                Open Tickets
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="active_tab">
                <b>Close Tickets</b>
              </span>
            </div>
            <div className="col-md-6 text-right">
              <h6 className="color_h6_opentickts">
                Number of Open Tickets : 1
              </h6>
            </div>
          </div>
          {/* <hr className="my-2" /> */}
          <div className="col-md-12 mt-2 px-0 height_fix_list">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Patient Image</th>
                  <th scope="col">Patient Id</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <img
                      className="img-fluid height_of_image1"
                      src="../images/profile.png"
                    />
                  </th>
                  <td>102245</td>
                  <td>Alex Kristopher</td>
                  <td>17 June, Monday at 9:00 am</td>
                  <td>
                    <button className="btn btn-success rounded-pill px-4 background_accept">
                      {' '}
                      Accept{' '}
                    </button>{' '}
                    &nbsp;
                    <button className="btn btn-danger rounded-pill px-4 background_reject">
                      {' '}
                      Decline
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Tabswitch
