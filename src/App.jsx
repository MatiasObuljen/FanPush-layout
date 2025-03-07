import "./App.css";
import NavBar from "./components/bars/navBar";
import Categories from "./components/categories/categories";
import TopBar from "./components/bars/topBar";
import { Context } from "./components/context/context";
import data from "./public/NotificationsData.json";

export default function App() {
  return (
    <Context.Provider value={data}>
      <TopBar />
      <Categories />
      <NavBar />
    </Context.Provider>
  );
}
