import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import MessageCard from './component/MessageCard';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
          {/* <MessageCard /> */}
          <Product/>
        </Provider>

      </header>
    </div>
  );
}

export default App;
