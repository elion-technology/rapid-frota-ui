import styles from "./ChecklistsPage.module.css"
import Title from "../../components/Title";
import ButtonPage from "../../components/ButtonPage";
import { useNavigate } from "react-router-dom";

function ChecklistsPage({ setCanAccess }) {

    const navigate = useNavigate();

    return (
        <main className={styles.container}>
            <div className={styles.containerOne}>
                <Title title="Checklists" text="Gerencie os acessos ao sistema" />
                <ButtonPage text="Checklist" func={() => {
                    setCanAccess(true)
                    setTimeout(() => navigate("/checklist/new"), 0);
                }} />
            </div>
        </main>
    )
}

export default ChecklistsPage;