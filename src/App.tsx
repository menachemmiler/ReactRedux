import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { store } from "./redux/store";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import ToDos from "./components/ToDos";
import Home from "./pages/Home";
import Shope from "./components/Shope";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <NavBar />
        {/* // צריך לעטוף את כל הקומפוננטות בספק שמכיל את הקובץ שמאחסן את כך הסטייטים */}
        <div className="main">
          <Routes>
            <Route path="/ReactRedux/" element={<Home />} />
            <Route path="/ReactRedux/counter" element={<Counter />} />
            <Route path="/ReactRedux/user" element={<User />} />
            <Route path="/ReactRedux/toDos" element={<ToDos />} />
            <Route path="/ReactRedux/shope" element={<Shope />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
