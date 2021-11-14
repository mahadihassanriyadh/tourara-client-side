import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import VacationPackages from './pages/Home/VacationPackages/VacationPackages';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/vacationPackages">
              <VacationPackages></VacationPackages>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
