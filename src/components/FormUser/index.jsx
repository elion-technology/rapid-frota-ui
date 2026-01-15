import FieldUser from "./FieldUser";
import styles from "./FormUser.module.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../ui/select"
import { useState } from "react";

function FormUser({ setIsOpen }) {
    const [cargo, setCargo] = useState("Líder");
    const [setor, setSetor] = useState("Infraestrutura");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Name: nome,
                    Email: email,
                    Departamento: setor,
                    Cargo: cargo,
                    Password: senha

                }),
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok && data.message.includes("Email") && data.message.includes("taken")) {
                console.log(data);
                return toast.error("Email já existente");
            }

            toast.success("Usuário Criado!");

            setIsOpen(false);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Novo Usuário</h1>
                <FieldUser
                    type="text"
                    placeholder="Digite o nome completo"
                    field="Nome completo"
                    setThing={setNome}
                />
                <FieldUser
                    type="email"
                    placeholder="Digite@email.com"
                    field="Email"
                    setThing={setEmail}
                />
                <FieldUser
                    type="password"
                    placeholder="Digite sua senha"
                    field="Senha"
                    setThing={setSenha}
                    title="A senha deve ter letra maiúscula e minúscula, número, símbolo e mínimo de 6 caracteres"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$"
                />
                <div className={styles.containerSelect}>
                    <div className={styles.select}>
                        <label>Cargo</label>
                        <SelectRoot value={cargo} onValueChange={setCargo}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="Líder">Líder</SelectItem>
                                <SelectItem value="Supervisor">Supervisor</SelectItem>
                                <SelectItem value="Gerente">Gerente</SelectItem>
                                <SelectItem value="Diretor">Diretor</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                    <div className={styles.select}>
                        <label>Setor</label>
                        <SelectRoot value={setor} onValueChange={setSetor}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="Infraestrutura">Infraestrutura</SelectItem>
                                <SelectItem value="Residencial">Residencial</SelectItem>
                                <SelectItem value="Engenharia">Engenharia</SelectItem>
                                <SelectItem value="Diretoria">Diretoria</SelectItem>
                                <SelectItem value="Financeiro">Financeiro</SelectItem>
                                <SelectItem value="Outro">Outro</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                </div>
                <button className={styles.btn} type="submit">Criar usuário</button>
                <button className={styles.btnCancel} type="click" onClick={() => setIsOpen(false)}>Cancelar</button>
            </form >
            <ToastContainer position="top-right" autoClose={3000} />
        </div >
    )
}


export default FormUser;