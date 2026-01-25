import { User } from "lucide-react"
import styles from "./UserBlock.module.css";


function UserBlock({ user }) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.containerIcon}>
                    <User color="#c5cad3" size={24} />
                </div>
                <div className={styles.containerInfo}>
                    <h3>{user?.name}</h3>
                    <p>{user?.cargo}</p>
                </div>
            </div>
        </div>
    )
}

export default UserBlock;