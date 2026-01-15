import styles from "./ButtonSidebar.module.css";
import { Link, useLocation } from "react-router-dom"


function ButtonSidebar({ icon, text, path, setIsOpen}) {
    const location = useLocation();
    const isActive = location.pathname === path;
    return (
        <Link to={path} className={`${styles.link} ${isActive ? styles.active : ""}`}  onClick={() => setIsOpen(false)}>
            {icon}
            <p>{text}</p>
        </Link>
    )
}

export default ButtonSidebar;