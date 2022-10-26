import "./gallery.css";
import { useState } from "react";

function Gallery(props) {
  const [imageIndex, setImageIndex] = useState(0);

  const images = props.images;

  setInterval(
    () => setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1),
    5000
  );

  return (
    <div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="mySlides fade"
            style={{ display: index === imageIndex ? "block" : "none" }}
          >
            <img src={image.src} alt={image.alt} />
            <div className="text">{image.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
