import Title from "../../components/Title";
import ButtonPage from "../../components/ButtonPage";
import styles from "./UsersPage.module.css";
import { useState, useEffect } from "react";
import User from "../../components/User";
import { UserRoundCog, CircleCheckBig, Search } from "lucide-react";
import MiniCardUser from "../../components/MiniCardUser";
import FormUser from "../../components/FormUser";

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
                <section className={styles.header}>
                    <Title title="Usuários" text="Gerencie os acessos ao sistema" />
                    <ButtonPage text="Usuário" func={() => setIsOpen(true)} />


                </section>
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
                <div className={styles.search}>
                    <Search size={16} color="hsl(220 10% 46%)"/>
                    <input type="text" placeholder="Buscar..." onChange={(e) => setSearch(e.target.value)} />
                </div>
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