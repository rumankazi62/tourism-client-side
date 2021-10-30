import './App.css';
import Header from './component/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nopage from './component/Nopage/Nopage';
import MyOrders from './component/MyOrders/MyOrders';
import Home from './component/Home/Home';
import ManageOrders from './component/ManageOrders/ManageOrders';
import AddService from './component/AddService/AddService';
import UserLogin from './component/Login/UserLogin/UserLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageOrders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <UserLogin></UserLogin>
          </Route>
          <Route path="*">
            <Nopage></Nopage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
