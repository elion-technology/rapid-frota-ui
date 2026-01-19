import { Ellipsis } from "lucide-react";
import styles from "./EntityCard.module.css";
import TagSubtitle from "../TagSubtitle"

function EntityCard({ title, subtitle, icon, background }) {
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
            <Ellipsis />
        </div>
    )
}

export default EntityCard;