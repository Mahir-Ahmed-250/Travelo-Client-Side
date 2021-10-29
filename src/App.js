import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Home></Home>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
