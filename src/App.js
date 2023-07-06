import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import PizzaHut from './component/PizzaHut';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
          <PizzaHut />
        </Provider>

      </header>
    </div>
  );
}

export default App;
