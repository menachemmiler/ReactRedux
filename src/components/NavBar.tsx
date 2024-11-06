import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/ReactRedux/counter"}>counter</NavLink>
      <NavLink to={"/ReactRedux/user"}>user</NavLink>
      <NavLink to={"/ReactRedux/todos"}>to dos</NavLink>
    </div>
  );
};

export default NavBar;
