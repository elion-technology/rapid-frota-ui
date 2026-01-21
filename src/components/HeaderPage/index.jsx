import Title from "../Title";
import ButtonPage from "../ButtonPage";
import styles from "./HeaderPage.module.css"

function HeaderPage({ title, textTitle, textBtn, setIsOpen}) {
    return (
        <div className={styles.header}>
            <Title title={title} text={textTitle} />
            <ButtonPage text={textBtn} func={setIsOpen} />
        </div>
    )
}

export default HeaderPage;