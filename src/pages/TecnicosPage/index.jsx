import styles from "./TecnicosPage.module.css"
import Title from "../../components/Title";
import ButtonPage from "../../components/ButtonPage";

function TecnicosPage() {
    return (
        <main className={styles.container}>
            <div className={styles.containerOne}>
                <Title title="Checklists" text="Gerencie os acessos ao sistema" />
                <ButtonPage text="Checklist" />
            </div>
        </main>
    )
}

export default TecnicosPage;