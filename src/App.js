import logo from './logo.svg';
import './App.css';
import {Router,Route} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <MainPage />;
      </Router>
    </div>
  );
}

export default App;
