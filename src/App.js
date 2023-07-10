import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Hobies from './component/Hobies';
import HobiesRadio from './component/HobiesRadio';
import EmployeeCard from './component/EmployeeCard';
import AuthUser from './component/AuthUser';
import Customers from './component/Customers';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
          {/* <Hobies/> */}
          {/* <HobiesRadio/> */}
          {/* <EmployeeCard/> */}
          {/* <AuthUser/> */}
          <Customers/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
