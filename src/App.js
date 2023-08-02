import logo from './logo.svg';
//import './App.css'
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Provider store={store}>
          <BrowserRouter>
            <MainNavbar />
            <Routes>
              
            </Routes>
          </BrowserRouter>
        </Provider>

      </header>
    </div>
  );
}

export default App;
