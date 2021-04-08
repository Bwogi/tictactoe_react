import './App.css';
import Tictactoe from './components/Tictactoe';
import Square from './components/Square';
import Circle from './components/Circle';
import Cross from './components/Cross';
import Result from './components/Result';


function App() {
  return (
    <div id="app">
    <Tictactoe />
    <Square />
    <Circle />
    <Cross />
    <Result />


    </div>
  );
}


export default App;
