import styles from "./FieldTecnico.module.css"

function FieldTecnico({ value, text }) {
    return (
        <div className={styles.container}>
            <p>{value}</p>
            <span>{text}</span>
        </div>
    )
}

export default FieldTecnico;