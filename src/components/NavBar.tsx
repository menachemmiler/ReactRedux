import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/counter"}>counter</NavLink>
      <NavLink to={"/user"}>user</NavLink>
      <NavLink to={"/todos"}>to dos</NavLink>
    </div>
  );
};

export default NavBar;
