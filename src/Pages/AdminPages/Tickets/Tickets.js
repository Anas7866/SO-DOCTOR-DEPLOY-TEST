import React from 'react'
import './Ticket.scss'
import Tabswitch from './Tabswitch/Tabswitch'

function Tickets() {
  return (
    <div className="col-md-12 mt-3 ">
      <div className="col-md-12 background_white_color py-3 ">
        <h5>
          <b>Tickets Module</b>
        </h5>

        <Tabswitch />
      </div>
    </div>
  )
}

export default Tickets
