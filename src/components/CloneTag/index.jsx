import styles from "./CloneTag.module.css";

function CloneTag({ text, icon, color, background }) {
    return(
        <div style={{
            backgroundColor: background,
            color: color
        }} className={styles.container}>
            {icon}
            <span >{text}</span>
        </div>
    )
}

export default CloneTag