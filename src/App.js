import "./App.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import ThemeButton from "./components/ThemeButton";
import MainBlock from "./components/MainBlock";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeButton />
      <MainBlock />
    </Provider>
  );
};
export default App;
