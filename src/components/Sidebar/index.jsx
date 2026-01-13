import styles from "./Sidebar.module.css";
import InfoHeader from "../InfoHeader";
import ButtonSidebar from "../ButtonSidebar";
import { UserRoundCog, Users, Car, ClipboardList, Wrench, SquareCheckBig } from 'lucide-react';


function Sidebar({ setIsOpen }) {
    return (
        <div className={styles.sidebarOverlay}>
            <nav className={styles.sidebar}>
                <InfoHeader setIsOpen={setIsOpen} />
                <div className={styles.buttons}>
                    <ButtonSidebar
                        path="/cars"
                        icon={<Car className="icon" size={22} />}
                        text="Carros"
                    />
                    <ButtonSidebar
                        path="/tecnicos"
                        icon={<Users className="icon" size={22} />}
                        text="Técnicos"
                    />
                    <ButtonSidebar
                        path="/oficinas"
                        icon={<Wrench className="icon" size={22} />}
                        text="Oficinas"
                    />
                    <ButtonSidebar
                        path="/checklists"
                        icon={<SquareCheckBig className="icon" size={22} />}
                        text="Checklists"
                    />
                    <ButtonSidebar
                        path="/tickets"
                        icon={<ClipboardList className="icon" size={22} />}
                        text="Tickets"
                    />
                    <ButtonSidebar
                        path="/"
                        icon={<UserRoundCog className="icon" size={22} />}
                        text="Usuários"
                    />
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;