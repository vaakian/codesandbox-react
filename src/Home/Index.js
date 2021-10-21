import { BrowserRouter, NavLink, Route } from "react-router-dom";
import About from "./About";
import User from "./User";
const routes = [
  { id: 1, to: "/", text: "home" },
  { id: 2, to: "/about", text: "about" },
  { id: 3, to: "/user", text: "user" }
];
const Index = (props) => {
  return (
    <BrowserRouter basename="home">
      {/* route-controller */}
      <div className="router-controller">
        {routes.map(({ to, id, text }) => (
          <NavLink
            className="router-link"
            activeClassName="router-active"
            to={to}
            key={id}
            exact
          >
            {text}
          </NavLink>
        ))}
      </div>
      {/* route-view */}
      <div className="router-view">
        <Route path="/" exact>
          <div>首页</div>
        </Route>
        <Route component={About} path="/about" exact></Route>
        <Route component={User} path="/user" exact></Route>
      </div>{" "}
    </BrowserRouter>
  );
};
export default Index;
