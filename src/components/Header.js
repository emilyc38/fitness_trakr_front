import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "./ui/Container";
import { userActions } from "../store/userSlice";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const logOutHandler = () => {
    dispatch(userActions.logoutUser());
    navigate("/routines", { replace: true });
  };
  return (
    <header>
      <Container>
        <div className={classes.header}>
          <nav className={classes.navigation}>
            <NavLink to="/routines">
              <h1 className={classes.title}>FitnessTrac.kr</h1>
            </NavLink>
            <NavLink to="/routines">Home</NavLink>
            <NavLink to="/routines">Routines</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            {user && <NavLink to="/myroutines">My Routines</NavLink>}
          </nav>
          {!user && <NavLink to="/auth">Login/Register</NavLink>}
          {user && (
            <button className={classes.logoutButton} onClick={logOutHandler}>
              Logout
            </button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
