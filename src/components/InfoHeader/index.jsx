import { Car, X } from "lucide-react";
import styles from "./InfoHeader.module.css";


function InfoHeader({ setIsOpen }) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.containerIcon}>
                    <Car color="white" size={24} />
                </div>
                <div className={styles.containerInfo}>
                    <h3>Rapid Frota</h3>
                    <p>Gestão de frotas</p>
                </div>
            </div>
            <X size={26} color="rgb(197, 202, 211, 0.8)" onClick={() => setIsOpen(false)}/>
        </div>
    )
}

export default InfoHeader;