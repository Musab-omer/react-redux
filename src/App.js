import logo from './logo.svg';
//import './App.css'
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import ContactApp from './component/contactApp/ContactApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
          <ContactApp/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
