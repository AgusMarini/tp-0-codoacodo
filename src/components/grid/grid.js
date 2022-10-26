import "./grid.css";
import { useSelector } from "react-redux";

function Grid() {
  const spots = useSelector((state) => state.app.searchFilter === "" ? state.app.spots : state.app.filteredSpots);

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <>
      {chunk(spots, 2).map((spots) => (
        <div className="flex-container">
          {spots.map((spot, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? "flex-item-left" : "flex-item-right"}
            >
              <link
                href="//es.surf-forecast.com/stylesheets/widget.css"
                media="screen"
                rel="stylesheet"
                type="text/css"
              />
              <div className="wf-width-cont surf-fc-widget">
                <div className="widget-container">
                  <div className="external-cont">
                    <iframe
                      title={spot.name}
                      className="surf-fc-i"
                      allowtransparency="true"
                      src={`//es.surf-forecast.com/breaks/${spot.src}/forecasts/widget/a`}
                      scrolling="no"
                      frameBorder="0"
                      marginWidth="0"
                      marginHeight="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Grid;
