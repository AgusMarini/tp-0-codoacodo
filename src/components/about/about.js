import "./about.css";
import Agustina from "../../assets/img/agustina.jpeg";
import Matias from "../../assets/img/matias.jpeg";
import Fernanda from "../../assets/img/fernanda.jpeg";
import Gallery from "../gallery/gallery";

function About() {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-item-left">
          <main>
            <div>
              <h3>About us</h3>
              <p>
                We are students of codo a codo the 2518 commission, we put
                together this page based on a practical work that our teacher
                Juan Pablo Nardone gave us. And we base ourselves on surfing
                since it is something that attracts us a lot. We hope you like
                this page since we gave it our "magical" touch to make it
                attractive and interesting.
              </p>
            </div>
          </main>
        </div>
      </div>
      <Gallery
        images={[
          {
            src: Agustina,
            alt: "Agustina",
            text: "Agustina Marini Finoquetto | Student of industrial design and programming",
          },
          {
            src: Matias,
            alt: "Matias",
            text: "Matias Valdez | Programming Student and works at it in crowe",
          },
          {
            src: Fernanda,
            alt: "Fernanda",
            text: "Maria Fernanda Almeira | Programming Student",
          },
        ]}
      />
    </div>
  );
}

export default About;
