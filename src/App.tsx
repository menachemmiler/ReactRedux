import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { store } from "./redux/store";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import ToDos from "./components/ToDos";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <NavBar />
        {/* // צריך לעטוף את כל הקומפוננטות בספק שמכיל את הקובץ שמאחסן את כך הסטייטים */}
        <div className="main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user" element={<User />} />
            <Route path="/toDos" element={<ToDos />} />
            <Route path="/test" element={<div>test</div>}/>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
