import styles from "./MiniCardUser.module.css"

function MiniCardUser({icon, text, data}) {
    return (
        <div className={styles.container}>
            <div>
                {icon}
                <span>{text}</span>
            </div>
            <p>{data}</p>
        </div>
    )
}

export default MiniCardUser