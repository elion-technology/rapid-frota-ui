import styles from "./FieldCar.module.css"

function FieldCar({text, label}) {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <p>{text}</p>
        </div>
    )
}

export default FieldCar;