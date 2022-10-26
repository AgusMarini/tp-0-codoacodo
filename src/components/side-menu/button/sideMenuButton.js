import "./sideMenuButton.css";
import { useDispatch } from 'react-redux';
import { toggleIsSideMenuActive } from '../../../reducers/appReducer';

export default function SideMenuButton() {
  const dispatch = useDispatch();

  return <span onClick={() => dispatch(toggleIsSideMenuActive())}>&#9776;</span>;
}
