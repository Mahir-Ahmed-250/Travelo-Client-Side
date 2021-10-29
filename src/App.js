import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';
import OrderPage from './Component/OrderPage/OrderPage';
import NotFound from './Component/NotFound/NotFound';
import AddANewService from './Component/AddANewService/AddANewService';
import ManageService from './Component/ManageService/ManageService';

import AuthProvider from './Context/AuthProvider';
import MyOrders from './Component/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services/:_id'>
              <OrderPage></OrderPage>
            </PrivateRoute>
            <PrivateRoute exact path='/addService'>
              <AddANewService></AddANewService>
            </PrivateRoute>
            <PrivateRoute exact path='/manageService'>
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
