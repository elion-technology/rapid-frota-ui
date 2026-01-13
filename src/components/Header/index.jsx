import { Menu, Car } from "lucide-react"
import styles from "./Header.module.css"
import { useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <Sidebar setIsOpen={setIsOpen}/>
            )}
            <header className={styles.header}>
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
                </nav>

            </header>

            <Outlet />
        </>
    )
}

export default Header;