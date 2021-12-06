import logo from './logo.svg';
import './App.css';
//import Login from './components/login';
//import SignUp from './components/signup';
//import Resetpassword from './components/ResetPasword';
//import SignInAndSignUp from './components/SignUpandSignIn';
import Router from './Router/router';
import Header from './components/header';
import DashBoard from './components/DashBoard';
import CartList from './components/Cart';
function App() {
  return (
    <div className="App">
           <Router/>
    </div>
  );
}
export default App;
              