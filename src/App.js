import './App.css';
import Grid from "./components/Grid"
import Undo from './components/Undo';
import Data from './context/Data';
function App() {
  return (
    <>
      <Data>
      <h1 className='heading'>Tic-Tac-Toe 😊</h1>
      <div className="maingrid">
        <Grid />
      </div>
      <Undo/>
      </Data>
      <p className='love'>Made With ❤️ By Anshul Jain</p>
    </>
  );
}

export default App;
