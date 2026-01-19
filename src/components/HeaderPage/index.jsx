import Title from "../Title";
import ButtonPage from "../ButtonPage";
import styles from "./HeaderPage.module.css"

function HeaderPage({ title, textTitle, textBtn}) {
    return (
        <div className={styles.header}>
            <Title title={title} text={textTitle} />
            <ButtonPage text={textBtn} />
        </div>
    )
}

export default HeaderPage;