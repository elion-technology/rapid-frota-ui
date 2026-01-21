import FieldForm from "../FieldForm";
import styles from "./FormUser.module.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../ui/select"
import { useState, useMemo, useEffect } from "react";


function FormUser({ setIsOpen }) {
    const [cargo, setCargo] = useState("Líder");
    const [setor, setSetor] = useState("Infraestrutura");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");


    const regras = useMemo(() => ({
        temNumero: /\d/,
        temEspecial: /[@#!$*&]/,
        temMaiuscula: /[A-Z]/,
        temMinuscula: /[a-z]/
    }), []);

    const validacao = useMemo(() => {
        return {
            numero: regras.temNumero.test(senha),
            especial: regras.temEspecial.test(senha),
            maiuscula: regras.temMaiuscula.test(senha),
            minuscula: regras.temMinuscula.test(senha),
            tamanho: senha.length >= 8
        };
    }, [senha, regras]);

    const isValid = Object.values(validacao).every(v => v === true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isValid) {
                return toast.error("Senha não cumpre os requisitos necessários");
            }

            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
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
                <FieldForm
                    type="text"
                    placeholder="Digite o nome completo"
                    field="Nome completo"
                    setThing={setNome}
                />
                <FieldForm
                    type="email"
                    placeholder="Digite@email.com"
                    field="Email"
                    setThing={setEmail}
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
                <input
                    className={styles.inputPassword}
                    type="password"
                    placeholder="Digite sua senha"
                    field="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <ul>
                    {validacao.numero ? <li className={styles.true}>A senha precisa conter número</li> : <li className={styles.false}>A senha precisa conter número</li>}
                    {validacao.especial ? <li className={styles.true}>A senha precisa conter caracteres especiais - @#$%&*!</li> : <li className={styles.false}>A senha precisa conter caracteres especiais - @#$%&*!</li>}
                    {validacao.maiuscula ? <li className={styles.true}>A senha precisa conter letra maiúscula</li> : <li className={styles.false}>A senha precisa conter letra maiúscula</li>}
                    {validacao.minuscula ? <li className={styles.true}>A senha precisa conter letra minúscula</li> : <li className={styles.false}>A senha precisa conter letra minúscula</li>}
                    {validacao.tamanho ? <li className={styles.true}>A senha precisa conter no mínimo 8 caracteres</li> : <li className={styles.false}>A senha precisa conter no mínimo 8 caracteres</li>}
                </ul>
                <button className={styles.btn} type="submit">Criar usuário</button>
                <button className={styles.btnCancel} type="click" onClick={() => setIsOpen(false)}>Cancelar</button>
            </form >
            <ToastContainer position="top-right" autoClose={3000} />
        </div >
    )
}


export default FormUser;