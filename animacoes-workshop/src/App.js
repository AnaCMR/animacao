
import './App.css';
import Exemplo from './components/Exemplos/exemplos';
import Banner from './components/Banner/banner';
import Introducao from './components/Introducao/introducao';
import Conselhos from './components/Conselhos/conselhos';
import Thanks from './components/Agradecimentos/thanks';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Introducao/>
      <Exemplo/>
      <Conselhos/>
      <Thanks/>
    </div>
  );
}

export default App;
