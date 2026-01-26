import { Ellipsis, SquarePen, Check } from "lucide-react";
import styles from "./EntityCard.module.css";
import TagSubtitle from "../TagSubtitle"
import { useState } from "react";

function EntityCard({ title, subtitle, icon, background }) {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div className={styles.containerIcon}>
                    {icon}
                </div>
                <div className={styles.infos}>
                    <h2 className={styles.title}>{title}</h2>
                    <TagSubtitle
                        text={subtitle}
                        color="#6a7181"
                    />
                </div>
            </div>
            <div className={styles.btn}>
                <Ellipsis onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} />
                {isOpen && (
                    <div className={styles.select}>
                        <button><SquarePen size={14} /> Interagir</button>
                        <button><Check size={14} />Finalizar</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EntityCard;