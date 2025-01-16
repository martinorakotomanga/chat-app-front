import { FunctionComponent } from "react";
import { NavLink } from "react-router";

type NavBarLinkProps = {
  to: string;
  children: string;
};

const NavBarLink: FunctionComponent<NavBarLinkProps> = ({ to, children }) => {
  const defaultStyle = "block px-4 py-4 mx-1 border-b-4 border-white";
  const activeStyle = defaultStyle.replace("border-white", "border-blue-400");

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
      to={to}
    >
      {children}
    </NavLink>
  );
};

const NavBar: FunctionComponent = () => {
  return (
    <nav className="pt-1 mb-3 shadow-sm">
      <ul className="flex justify-center">
        <li>
          <NavBarLink to="/menu/friends">Amie</NavBarLink>
        </li>
        <li>
          <NavBarLink to="/menu/messages">Message</NavBarLink>
        </li>
        <li>
          <NavBarLink to="/menu/settings">Paramètre</NavBarLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
