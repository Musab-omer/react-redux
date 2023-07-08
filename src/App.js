import logo from './logo.svg';
//import './App.css';
import MainNavbar from './layout/MainNavbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import CarSelector from './component/CarSelector';
import MessageCard from './component/MessageCard';
import SMSApp from './component/SMSApp';
import UserRegistration from './component/UserReagistration';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavbar />
        <Provider store={store}>
         {/* <CarSelector/> */}
         {/* <MessageCard/> */}
         {/* <SMSApp/> */}
         <UserRegistration/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
