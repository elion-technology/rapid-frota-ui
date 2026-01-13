import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login";
import UsersPage from "./pages/UsersPage";
import Header from "./components/Header"
import ChecklistsPage from "./pages/ChecklistsPage";
import TecnicosPage from "./pages/TecnicosPage";
import TicketsPage from "./pages/TicketsPage";
import CarsPage from "./pages/CarsPage";
import OficinasPage from "./pages/OficinasPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<UsersPage/>}/>
          <Route path="/checklists" element={<ChecklistsPage/>}/>
          <Route path="/tickets" element={<TicketsPage/>}/>
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/tecnicos" element={<TecnicosPage/>}/>
          <Route path="/oficinas" element={<OficinasPage/>}/>

        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
