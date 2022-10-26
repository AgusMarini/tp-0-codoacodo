import "./sideMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsSideMenuActive, search } from "../../reducers/appReducer";

function SideMenu() {
  const dispatch = useDispatch();
  const isSideMenuActive = useSelector((state) => state.app.isSideMenuActive);
  const searchFilter = useSelector((state) => state.app.searchFilter);
  const spots = useSelector((state) => state.app.searchFilter === "" ? state.app.spots : state.app.filteredSpots);

  return (
    <div className={isSideMenuActive ? "sideMenu active" : "sideMenu"}>
      <span onClick={() => dispatch(toggleIsSideMenuActive())}>&times;</span>
      <input
        type="text"
        placeholder="Search a spot..."
        title="Type something"
        value={searchFilter}
        onChange={(event) => dispatch(search(event.target.value))}
      />
      <ul>
        {spots.map((spot) => (
          <li key={spot.id} onClick={() => dispatch(search(spot.name))}>{spot.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
