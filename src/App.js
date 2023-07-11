import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import UserList from './component/UserList';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
          <UserList/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
