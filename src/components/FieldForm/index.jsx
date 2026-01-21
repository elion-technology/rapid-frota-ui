import styles from "./FieldForm.module.css"

function FieldForm({ field, type, placeholder, setThing, func }) {
    return (
        <div className={styles.container}>
            <label htmlFor={field}>{field}</label>
            <input
                type={type}
                placeholder={placeholder}
                id={field}
                onChange={(e) => {
                    setThing(e.target.value)
                }}
                required
            />
        </div>
    )
}

export default FieldForm;