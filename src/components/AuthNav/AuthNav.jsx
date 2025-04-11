import { NavLink } from 'react-router';
import css from './AuthNav.module.css';
const AuthNav = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        LogIn
      </NavLink>
    </nav>
  );
};
export default AuthNav;
