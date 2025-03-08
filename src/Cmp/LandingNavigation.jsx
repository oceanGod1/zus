import "./LandingNavigation.css";
import { useTestStore } from "../testStore";
import logo from "../assets/delete.png";
import MenuLink from "./MenuLink";

export default function LandingNavigation() {
  const menuLinks = useTestStore(menu => menu.menuLinks);

  return (
    <header className="landing-navigation">
      <span className="logo-holder">
        <a href="index.html">
          <img src={logo} alt="site logo" className="site-logo" />
        </a>
      </span>
      <nav className="menu-holder">
        {menuLinks.map((area, id) => (
          <ul
            id={id}
            className={`main-menu ${area === menuLinks[1] && "client-area"}`}
          >
            {area.map(link => (
              <MenuLink key={link} link={link} />
            ))}
          </ul>
        ))}
      </nav>
    </header>
  );
}
