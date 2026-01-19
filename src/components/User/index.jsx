import styles from "./User.module.css";
import { CircleUserRound, CircleCheckBig, CircleX, SquarePen } from "lucide-react";
import TagActive from "../TagActive";
import TagSubtitle from "../TagSubtitle";

function User({ id, cargo, nome, ativo, departamento, email, }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <div>
                        <CircleUserRound color="#f97015" />
                    </div>
                    <div>
                        <h3>{nome}</h3>
                        <TagSubtitle
                            text={cargo}
                            color="#6a7181"
                            background="#f3f4f6"
                            padding="0.25rem 0.5rem"
                            fontSize="0.75rem"
                        />
                    </div>
                </div>
                <div>
                    {ativo ? <TagActive text="Ativo" icon={<CircleCheckBig size={12} color="hsl(142 71% 45%)" />} isActive={true} /> :
                        <TagActive text="Inativo" icon={<CircleX size={12} color="#6a7181" />} isActive={false} />}
                </div>
            </div>
            <div>
                <div className={styles.info1}>
                    <div className={styles.label}>
                        <span>ID</span>
                        <p>{id}</p>
                    </div>
                    <div className={styles.label}>
                        <span>Setor</span>
                        <p>{departamento}</p>
                    </div>
                    <div className={styles.label}>
                        <span>Email</span>
                        <p>{email}</p>
                    </div>
                </div>
                <div className={styles.divButton}>
                    <button><SquarePen size={14} color="#1d212b" />Editar</button>
                    {ativo ? <button><CircleX size={14} color="#1d212b"/>Desativar</button> : <button><CircleCheckBig size={14} color="#1d212b"/>Ativar</button>}
                </div>
            </div>
        </div>
    )
}

export default User;