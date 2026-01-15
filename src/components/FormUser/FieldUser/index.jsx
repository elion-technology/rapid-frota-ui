import styles from "./FieldUser.module.css"

function FieldUser({ field, type, placeholder, setThing, pattern, title }) {
    return (
        <div className={styles.container}>
            <label htmlFor={field}>{field}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                id={field} 
                onChange={(e) => setThing(e.target.value)} 
                pattern={pattern}
                title={title}
                required 
            />
        </div>
    )
}

export default FieldUser;