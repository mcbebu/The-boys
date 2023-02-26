import './App.css';
import Visualisation1 from './components/Visualisation1';
import NINJAPIC from './assets/Ninja.png'
import AICounter from './components/AICounter';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <div className="Title">
        <h1 className='ninja'>ninja</h1><h1 className='eye'>eye</h1>
        <img src={NINJAPIC} className="ninjapic"/>
        
      </div>
      <Nav/>
      <Visualisation1 />
      <div style={{ marginTop: '7rem' }}><AICounter/></div>

      <div style={{ marginTop: '10rem' }}></div>
      
    </>
  );
}

export default App;
