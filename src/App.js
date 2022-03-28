import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import Othermain from './Othermain';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/main2" component={Othermain} />
        
      </Router>
    </div>
  );
}

export default App;
