import logo from './logo.svg';
//import './App.css'
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import ProductsList from './components/product/ProductsList';
import Admin from './components/admin/Admin';
import UpdateProduct from './components/product/UpdateProduct';
import CreateProduct from './components/product/CreateProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Provider store={store}>
          <BrowserRouter>
            <MainNavbar />
            <Routes>
              <Route exact path='/' Component={Home}/>
              <Route exact path='/products/list' Component={ProductsList}/>
              <Route exact path='/products/admin' Component={Admin}/>
              <Route exact path='/products/:id' Component={UpdateProduct}/>
              <Route exact path='/products/create' Component={CreateProduct}/>
            </Routes>
          </BrowserRouter>
        </Provider>

      </header>
    </div>
  );
}

export default App;
