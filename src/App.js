import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login";
import UsersPage from "./pages/UsersPage";
import Header from "./components/Header"
import ChecklistsPage from "./pages/ChecklistsPage";
import TecnicosPage from "./pages/TecnicosPage";
import TicketsPage from "./pages/TicketsPage";
import CarsPage from "./pages/CarsPage";
import OficinasPage from "./pages/OficinasPage";
import { useState } from "react";
import NewChecklist from "./pages/NewChecklist";



function App() {
  const [canAccess, setCanAccess] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<UsersPage/>}/>
          <Route path="/checklists" element={<ChecklistsPage setCanAccess={setCanAccess}/>}/>
          <Route path="/tickets" element={<TicketsPage />}/>
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/tecnicos" element={<TecnicosPage/>}/>
          <Route path="/oficinas" element={<OficinasPage/>}/>
          <Route path="/checklist/new" element={canAccess ? <NewChecklist /> : <Navigate to="/"/>}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
