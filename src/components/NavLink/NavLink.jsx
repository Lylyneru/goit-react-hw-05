import { NavLink, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavLink.module.css"; // Стилі (за бажанням)

const CustomNavLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to).pathname;

  return (
    <NavLink
      to={resolvedPath}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      {children}
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomNavLink;
