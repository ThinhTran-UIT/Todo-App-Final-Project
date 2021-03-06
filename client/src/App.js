import { BrowserRouter, Switch, Route } from "react-router-dom";
import {} from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./view/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./view/About";
import PostContextProvider from './contexts/PostContext'
function App() {
  return (
    <AuthContextProvider>    
    <PostContextProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" render={props => <Auth {...props} authRoute='login'/>}/>
        <Route exact path="/register" render={props => <Auth {...props} authRoute='register'/>}/>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/about" component={About} />

      </Switch>
      </BrowserRouter> 
    </PostContextProvider>
    </AuthContextProvider>
    
  );
}
export default App;
