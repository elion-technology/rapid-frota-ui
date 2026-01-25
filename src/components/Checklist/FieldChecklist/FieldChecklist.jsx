import styles from "./FieldChecklist.module.css"

function FieldChecklist({text, label}) {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <p>{text}</p>
        </div>
    )
}

export default FieldChecklist;