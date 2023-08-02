import logo from './logo.svg';
//import './App.css'
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Employees from './components/employee/EmployeesList';
import Employee from './components/employee/EmployeeDetails';
import Stocks from './components/stock/Stocks';
import StockDetails from './components/stock/StockDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Provider store={store}>
          <BrowserRouter>
            <MainNavbar />
            <Routes>
              <Route exact path='/' Component={Home} />
              <Route exact path='/employees/list' Component={Employees} />
              <Route exact path='/employees/:id' Component={Employee} />
              <Route exact path='/stocks/list' Component={Stocks} />
              <Route exact path='/stocks/:id' Component={StockDetails}/>
              <Route exact path='/about' Component={About} />

            </Routes>
          </BrowserRouter>
        </Provider>

      </header>
    </div>
  );
}

export default App;
