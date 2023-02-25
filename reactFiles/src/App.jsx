import './App.css';
import Visualisation1 from './components/Visualisation1';
import NINJAPIC from './assets/Ninja.png'

function App() {
  return (
    <>
      <div className="Title">
        <h1 className='ninja'>ninja</h1><h1 className='van'>van</h1>
        <img src={NINJAPIC} className="ninjapic"/>
        
      </div>
      <Visualisation1 />
    </>
  );
}

export default App;
