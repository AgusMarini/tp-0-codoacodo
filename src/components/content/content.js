import "./content.css";
import { useSelector } from "react-redux";
import Header from "../header/header";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer";
import Grid from "../grid/grid";
import Contact from "../contact/contact";
import About from "../about/about";
import Surfboards from "../../assets/img/surfboards.jpg";
import Rules from "../../assets/img/rules.png";

function Content() {
  const isSideMenuActive = useSelector((state) => state.app.isSideMenuActive);
  const isGalleryActive = useSelector((state) => state.app.isGalleryActive);
  const isGridActive = useSelector((state) => state.app.isGridActive);
  const isContactActive = useSelector((state) => state.app.isContactActive);
  const isAboutActive = useSelector((state) => state.app.isAboutActive);

  return (
    <div className={isSideMenuActive ? "content moved" : "content"}>
      <Header />
      {isGalleryActive ? (
        <Gallery
          images={[
            {
              src: Surfboards,
              alt: "Boards",
              text: "Boards",
            },
            {
              src: Rules,
              alt: "Rules",
              text: "Rules",
            },
          ]}
        />
      ) : (
        <></>
      )}
      {isGridActive ? <Grid /> : <></>}
      {isContactActive ? <Contact /> : <></>}
      {isAboutActive ? <About /> : <></>}
      <Footer />
    </div>
  );
}

export default Content;
