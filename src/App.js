import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import PizzaHut from './component/PizzaHut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar/>
        <PizzaHut/>
      </header>
    </div>
  );
}

export default App;
