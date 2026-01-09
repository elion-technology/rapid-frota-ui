import InputLogin from "../InputLogin"
import styles from "./CardLogin.module.css";

function CardLogin() {
    return (
        <div className={styles.card}>
            <div className={styles.containerInfo}>
                <h2 className={styles.title}> Entrar na sua conta</h2>
                <p className={styles.text}>Digite suas credencias para acessar o sistema</p>
            </div>
            <div className={styles.containerInput}>
                <InputLogin folder="Email" type="email" placeholder="seu@email.com" icon={false} />
                <InputLogin folder="Senha" type="password" icon={true} />
                <button className={styles.btn}>Entrar</button>
            </div>
        </div>
    )
}

export default CardLogin;