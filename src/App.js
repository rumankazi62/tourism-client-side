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
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import AllPackage from './component/AllPackage/AllPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/package">
            <AllPackage></AllPackage>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="/login">
            <UserLogin></UserLogin>
          </Route>
          <Route path="*">
            <Nopage></Nopage>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
