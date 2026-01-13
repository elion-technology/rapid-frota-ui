import styles from "./ButtonSidebar.module.css";
import { Link, useLocation } from "react-router-dom"


function ButtonSidebar({ icon, text, path }) {
    const location = useLocation();
    const isActive = location.pathname === path;
    return (
        <Link to={path} className={`${styles.link} ${isActive ? styles.active : ""}`} >
            {icon}
            <p>{text}</p>
        </Link>
    )
}

export default ButtonSidebar;