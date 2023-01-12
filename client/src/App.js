import './App.scss';
import io from 'socket.io-client'
import TradeWindow from './components/TradeWindow';

function App() {

  return (
    <div className="App">
      <TradeWindow/>
    </div>
  );
}

export default App;
