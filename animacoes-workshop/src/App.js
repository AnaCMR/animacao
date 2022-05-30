
import './App.css';
import Exemplo from './components/Exemplos/exemplos';
import Banner from './components/Banner/banner';
import Introducao from './components/Introducao/introducao';
import Conselhos from './components/Conselhos/conselhos';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Introducao/>
      <Exemplo/>
      <Conselhos/>
    </div>
  );
}

export default App;
