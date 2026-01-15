import { Plus } from "lucide-react";
import styles from "./ButtonPage.module.css"

function ButtonPage({ text, func }) {
    return (
        <button className={styles.btn} onClick={func}>
            <Plus className={styles.Icon} size={14}/>
            Novo {text}
        </button>
    )
}

export default ButtonPage;