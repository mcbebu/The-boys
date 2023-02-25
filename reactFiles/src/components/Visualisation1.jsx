import React from 'react'
import './visualisation1.css'
import MyChart from './MyChart'
import CurrTime from './CurrTime'

const Visualisation1 = () => {
  return (
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
  )
}


/*
class Visualisation1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartXValues: [],
      chartYValues: []
    }
  }

  //import the thing
  /*
  fetchData() {
    const API_KEY = 'asflhakhf';
    let API_Call = 
  }
  */

  // render() {
  //   return (
  //     <section>
  //       <h3 className='VisName'>Visualisation1</h3>
  //       <div> test</div>
  //     </section>
  //   )
  // }
  
//}

export default Visualisation1