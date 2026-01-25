import HeaderPage from "../../components/HeaderPage";
import styles from "./UsersPage.module.css";
import { useState, useEffect } from "react";
import User from "../../components/User";
import { UserRoundCog, CircleCheckBig } from "lucide-react";
import MiniCardUser from "../../components/MiniCardUser";
import FormUser from "../../components/FormUser";
import SearchBar from "../../components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "../../api/users.api";

function UsersPage() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("");



    useEffect(() => {
        getUsers()
            .then(res => setData(res.data))
            .catch((error) => {
                setData([]); //SEGURANÇA PARA NÃO QUEBRAR O CÓDIGO
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            })
    }, []);

    const filteredUsers = Array.isArray(data) ? data.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.userName.toLowerCase().includes(search.toLowerCase()) ||
        user.departamento.toLowerCase().includes(search.toLowerCase()) ||
        user.cargo.toLowerCase().includes(search.toLowerCase()))
        : []

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Usuários"
                    textTitle="Gerencie os acessos ao sistema"
                    textBtn="Usuário"
                    setIsOpen={() => setIsOpen(true)}
                />
                <div className={styles.cards}>
                    <MiniCardUser
                        text="Total"
                        icon={<UserRoundCog size={16} color="#f97015" />}
                        data={data.length}
                    />
                    <MiniCardUser
                        text="Ativos"
                        icon={<CircleCheckBig size={16} color="hsl(142 71% 45%)" />}
                        data={
                            Array.isArray(data)
                                ? data.filter(user => user.emailConfirmed).length
                                : 0
                        }
                    />
                </div>
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.containerTwo}>
                {filteredUsers.map((item) => (
                    <User
                        key={item.id}
                        id={item.id}
                        email={item.userName}
                        ativo={item.emailConfirmed}
                        nome={item.name}
                        cargo={item.cargo}
                        departamento={item.departamento}
                    />
                ))}
            </section>
            <ToastContainer position="top-right" autoClose={3000} />

            {isOpen && (
                <FormUser setIsOpen={setIsOpen} />
            )}
        </main>
    )
}

export default UsersPage;