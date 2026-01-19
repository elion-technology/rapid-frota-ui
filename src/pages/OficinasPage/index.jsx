import styles from "./OficinasPage.module.css"
import Title from "../../components/Title";
import ButtonPage from "../../components/ButtonPage";

function OficinasPage() {
    return (
        <main className={styles.container}>
            <div className={styles.containerOne}>
                <Title title="Oficinas" text="Gerencie os acessos ao sistema" />
                <ButtonPage text="Oficina" />
            </div>
        </main>
    )
}

export default OficinasPage;