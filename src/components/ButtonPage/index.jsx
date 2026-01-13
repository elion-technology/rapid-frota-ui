import { Plus } from "lucide-react";
import styles from "./ButtonPage.module.css"

function ButtonPage({ text }) {
    return (
        <button className={styles.btn}>
            <Plus className={styles.Icon} size={14}/>
            Novo {text}
        </button>
    )
}

export default ButtonPage;