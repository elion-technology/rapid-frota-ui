import styles from "./Sidebar.module.css";
import InfoHeader from "../InfoHeader";
import ButtonSidebar from "../ButtonSidebar";
import UserBlock from "./UserBlock";
import { UserRoundCog, Users, Car, ClipboardList, Wrench, SquareCheckBig } from 'lucide-react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { check } from "../../api/users.api";


function Sidebar({ setIsOpen }) {
    const [ userData, setUserData ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        check()
            .then(res => setUserData(res.data))
            .catch((error) => {
                if(error.response.status === 401) {
                    navigate("/login")
                }
            })
    })

    return (
        <div className={styles.sidebarOverlay}>
            <nav className={styles.sidebar}>
                <InfoHeader setIsOpen={setIsOpen} />
                <div className={styles.buttons}>
                    <ButtonSidebar
                        path="/cars"
                        icon={<Car className="icon" size={22}  />}
                        text="Carros"
                        setIsOpen={setIsOpen}
                    />
                    <ButtonSidebar
                        path="/tecnicos"
                        icon={<Users className="icon" size={22} />}
                        text="Técnicos"
                        setIsOpen={setIsOpen}
                    />
                    <ButtonSidebar
                        path="/checklists"
                        icon={<SquareCheckBig className="icon" size={22} />}
                        text="Checklists"
                        setIsOpen={setIsOpen}
                    />
                    <ButtonSidebar
                        path="/tickets"
                        icon={<ClipboardList className="icon" size={22} />}
                        text="Tickets"
                        setIsOpen={setIsOpen}
                    />
                    <ButtonSidebar
                        path="/"
                        icon={<UserRoundCog className="icon" size={22} />}
                        text="Usuários"
                        setIsOpen={setIsOpen}
                    />
                </div>
                <UserBlock user={userData}/>
            </nav>
        </div>
    )
}

export default Sidebar;