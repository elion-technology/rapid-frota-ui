import styles from "./Tag.module.css";

function Tag({ text, icon, isActive }) {
    return(
        <div className={`${styles.container} ${isActive ? styles.active : styles.inactive}`}>
            {icon}
            {text}
        </div>
    )
}

export default Tag