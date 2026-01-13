import InputLogin from "../InputLogin"
import styles from "./CardLogin.module.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function CardLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const requestLogin = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    "password": senha
                }),
            })

            if (!response.ok) throw new Error("Login inválido"); 

            const data = await response.text();
            toast.success("Login realizado com sucesso!");
            navigate("/")

        
        } catch (err) {
            console.error(err.message);
            toast.error("Login inválido! Verifique email e senha.");
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.containerInfo}>
                <h2 className={styles.title}> Entrar na sua conta</h2>
                <p className={styles.text}>Digite suas credencias para acessar o sistema</p>
            </div>
            <div className={styles.containerInput}>
                <InputLogin
                    folder="Email"
                    type="email"
                    placeholder="seu@email.com"
                    icon={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputLogin
                    folder="Senha"
                    type="password"
                    icon={true}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button className={styles.btn} onClick={requestLogin}>Entrar</button>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    )
}

export default CardLogin;