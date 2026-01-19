import HeaderPage from "../../components/HeaderPage";
import styles from "./UsersPage.module.css";
import { useState, useEffect } from "react";
import User from "../../components/User";
import { UserRoundCog, CircleCheckBig, Search } from "lucide-react";
import MiniCardUser from "../../components/MiniCardUser";
import FormUser from "../../components/FormUser";
import SearchBar from "../../components/SearchBar";

function UsersPage() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("");



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth`, {
                    method: "GET",
                    credentials: "include"
                });

                if (!res.ok) {
                    console.log("Não autorizado:", res.status);
                    return;
                }

                const json = await res.json();
                setData(json);


            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = data.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.userName.toLowerCase().includes(search.toLowerCase()) ||
        user.departamento.toLowerCase().includes(search.toLowerCase()) ||
        user.cargo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Usuários"
                    textTitle="Gerencie os acessos ao sistema"
                    textBtn="Usuário"
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
                        data={data.filter(user => user.emailConfirmed === true).length}
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

            {isOpen && (
                <FormUser setIsOpen={setIsOpen} />
            )}
        </main>
    )
}

export default UsersPage;