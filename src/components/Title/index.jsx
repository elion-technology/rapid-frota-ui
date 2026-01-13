import styles from "./Title.module.css"

function Title({ title, text}) {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Title;