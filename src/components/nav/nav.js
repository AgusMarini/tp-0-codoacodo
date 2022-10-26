import "./nav.css";
import SideMenuButton from "../side-menu/button/sideMenuButton";
import { useSelector, useDispatch } from "react-redux";
import { showGallery, showGrid, showContact, showAbout } from "../../reducers/appReducer";

function Nav() {
  const dispatch = useDispatch();
  const isGridActive = useSelector((state) => state.app.isGridActive);

  return (
    <nav>
      { isGridActive ? <SideMenuButton /> : <></>}
      <div className="navItem" onClick={() => dispatch(showGallery())}>
        <i className="icon fa fa-picture-o"></i>Gallery
      </div>
      <div className="navItem" onClick={() => dispatch(showGrid())}>
        <i className="icon fa fa-globe"></i>Spots
      </div>
      <div className="navItem" onClick={() => dispatch(showContact())}>
        <i className="icon fa fa-fw fa-envelope"></i>Contact
      </div>
      <div className="navItem" onClick={() => dispatch(showAbout())}>
        <i className="icon fa fa-info-circle"></i>About us
      </div>
    </nav>
  );
}

export default Nav;
