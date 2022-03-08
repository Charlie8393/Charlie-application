import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact spath="/main" component={MainPage} />
        
      </Router>
    </div>
  );
}

export default App;
