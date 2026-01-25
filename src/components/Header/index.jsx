import { Menu, Car, LogOut } from "lucide-react"
import styles from "./Header.module.css"
import { useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../api/users.api";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {isOpen && (
                <Sidebar setIsOpen={setIsOpen}/>
            )}
            <header className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <nav>
                    <Menu
                        color="#c5cad3cc"
                        size={24}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <div>
                        <div>
                            <Car color="white" size={20} />
                        </div>
                        <p>Rapid Frota</p>
                    </div>
                    <LogOut 
                        color="#c5cad3cc"
                        size={24}
                        onClick={() => {
                            logout()
                                .then(() => navigate("/login"))
                                .catch(() => "Algo deu errado");
                        }}
                    />
                </nav>

            </header>

            <Outlet />
        </>
    )
}

export default Header;