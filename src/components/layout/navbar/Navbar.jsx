import { menuNavigate } from "../../../routes/menuNavigate";
import CartWidget from "../../common/cartwidget/CartWidget";
import "./Navbar.css";
import { ThemeContext } from "../../../context/temeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className={theme ? "containerNavbar luz" : "containerNavbar oscuro"}>
        <Link to="/">
          <h2
            className={theme ? "containerNavbar luz" : "containerNavbar oscuro"}
          >
            Heladeria Tucan
          </h2>
        </Link>

        <ul className="categories">
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>
        <button className="temab" onClick={() => setTheme(!theme)}>
          tema color
        </button>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
