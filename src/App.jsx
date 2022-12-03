import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Shipping from "./components/Shipping";
import Friends from "./components/Friends";
import Catalog from "./components/Catalog";


function App(props) {
  return (
    <div className="mt-5 container-fluid">
      <div className="row">
        <div className="col-sm-3">
        <div  className="nav flex-column nav-pills"
        aria-orientation="vertical">
<NavLink  className="nav-link" to="catalog">Каталог</NavLink>
<NavLink  className="nav-link" to="shipping">Доставка</NavLink>
<NavLink  className="nav-link" to="profile">Контакты</NavLink>
<NavLink  className="nav-link" to="messages">Шоу-румы</NavLink>
<NavLink  className="nav-link" to="friends">Мои друзья</NavLink>

</div>
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route path="/profile/*" element={<Profile function={props.function.key_getUser}/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/friends" element={<Friends function={props.function.key_getUsers}/>} />
            <Route path="/catalog" element={<Catalog/>} />
          </Routes>
        </div>
      </div>
    </div>
    
  );
}

export default App;
