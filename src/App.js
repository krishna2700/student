import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Faculties from "./Pages/Faculties";

import StudentList from "./Pages/StudentList";
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import EventRegisteration from "./Pages/EventRegisteration";
import Pie from "./Pages/Pie";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           <Route  path="/faculties">
            <Faculties />
          </Route>
          <Route path="/Student list">
            <StudentList />
          </Route>
           <Route path="/user/:userId">
            <User />
          </Route>
           <Route path="/newUser">
            <NewUser />
          </Route>
           
          <Route path="/event registeration">
            <EventRegisteration />
          </Route>
          <Route path="/Product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
          
          <Route path="/pieChart">
            <Pie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
