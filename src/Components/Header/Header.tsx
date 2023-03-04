import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { useLang } from "../../Hooks/useLang";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  const textConstants = useLang();
  return (
    <header>
      <div className={css.container}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
        </div>
        <nav className={css.navigate}>
          <div className={css.navigate_item}>
            <NavLink
              className={({ isActive }) => {
                const linkClass = [];
                isActive && linkClass.push(css.active_nav);
                return linkClass.join(" ");
              }}
              to="/"
              title={textConstants.nav.home}
            >
              {textConstants.nav.home}
            </NavLink>
          </div>
          <div className={css.navigate_item}>
            <NavLink
              className={({ isActive }) => {
                const linkClass = [];
                isActive && linkClass.push(css.active_nav);
                return linkClass.join(" ");
              }}
              to="/characters/"
              title={textConstants.nav.characters}
            >
              {textConstants.nav.characters}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
