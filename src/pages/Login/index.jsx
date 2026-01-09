import { Car } from "lucide-react";
import styles from "./Login.module.css";
import CardLogin from "../../components/CardLogin";

function Login() {
    return (
        <main className={styles.container}> 
            <div className={styles.containerIcon}>
                <Car size={36} strokeWidth={2} color="#fff"/>
            </div>
            <h1 className={styles.title}>Rapid Frota</h1>
            <p className={styles.text}>Sistema de Gestão de Frotas</p>
            <CardLogin />
            <p className={styles.copyright}>© 2026 Rapid Frota. Todos os direitos reservados.</p>
        </main>
    )
}

export default Login;