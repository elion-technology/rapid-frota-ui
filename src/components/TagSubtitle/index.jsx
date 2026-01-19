import styles from "./CloneTag.module.css";

function TagSubtitle({ text, color, background, padding, fontSize }) {
    return(
        <div style={{
            backgroundColor: background,
            color: color,
            padding: padding,
            fontSize: fontSize
        }} className={styles.container}>
            <span >{text}</span>
        </div>
    )
}

export default TagSubtitle