import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import UserList from './component/UserList';
import UserListSimple from './component/UserListSimple';
import CustomersCard from './component/custoemrs/CustomersCard';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
          {/* <UserList/> */}
          {/* <UserListSimple/> */}
          <CustomersCard/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
