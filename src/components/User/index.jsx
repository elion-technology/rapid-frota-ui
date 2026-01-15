import styles from "./User.module.css";
import { CircleUserRound, CircleCheckBig, CircleX, SquarePen } from "lucide-react";
import Tag from "../Tag";
import CloneTag from "../CloneTag";

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
                        <CloneTag
                            text={cargo}
                            color="#6a7181"
                            background="#f3f4f6"
                        />
                    </div>
                </div>
                <div>
                    {ativo ? <Tag text="Ativo" icon={<CircleCheckBig size={12} color="hsl(142 71% 45%)" />} isActive={true} /> :
                        <Tag text="Inativo" icon={<CircleX size={12} color="#6a7181" />} isActive={false} />}
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