import React from 'react'
import './visualisation1.css'
import MyChart from './MyChart'
import CurrTime from './CurrTime'

const Visualisation1 = () => {
  return (
    <section id='visualisation1'>
      <div className="container Vis1Section">
        <div className='Titles'>
          <h3 className='VisName'>Inbound Volume</h3>
          <h3 className='CurrTime'><CurrTime/></h3>
        </div>
        <div className='PlaceChart'>
          <MyChart/>
        </div>
        <h3 className='WarehouseZones'>Warehouse Zones</h3>

      </div>
    </section>
  )
}

export default Visualisation1