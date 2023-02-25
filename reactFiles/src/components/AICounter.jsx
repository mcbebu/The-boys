import React from 'react'
import MyVideoPlayer from './MyVideoPlayer'

const AICounter = () => {
  return (
    <section id='aicounter'>
      <div className="container AISection">
        <div className='Titles'>
          <h3 className='AIName'>Livestream Area</h3>
          {/* <h3 className='CurrTime'><CurrTime/></h3> */}
        </div>

        <div className='PlaceVid'>
          <MyVideoPlayer/>
        </div>

        <h3 className='WarehouseZones'>Zone A</h3>

      </div>
    </section>
  )
}

export default AICounter