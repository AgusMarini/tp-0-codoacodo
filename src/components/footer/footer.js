import "./footer.css";
import { useSelector } from "react-redux";

function Footer() {
    const isSideMenuActive = useSelector((state) => state.app.isSideMenuActive);

  return (
    <footer className={isSideMenuActive ? "moved": ""}>
          <strong>© All rights reserved</strong>
    </footer>
  );
}

export default Footer;
