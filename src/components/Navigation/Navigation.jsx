import { NavLink } from "react-router-dom";
import "./Navigation.module.css"; // Стилізація кнопок
import Header from "../../components/Header/Header";

function Navigation() {
  return (
    <Header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Movies
        </NavLink>
      </nav>
    </Header>
  );
}

export default Navigation;
