import toggle_theme from "../actions/toggle_theme";
import { useDispatch } from "react-redux";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggle_theme());
  };
  return (
    <>
      <button onClick={handleTheme}>Сменить тему</button>
    </>
  );
};
export default ThemeButton;
