
import './App.css';
import Exemplo from './components/Exemplos/exemplos';
import Banner from './components/Banner/banner';
import Introducao from './components/Introducao/introducao';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Introducao/>
      <Exemplo/>
    </div>
  );
}

export default App;
