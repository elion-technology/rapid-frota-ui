import Title from "../../components/Title";
import ButtonPage from "../../components/ButtonPage";
import styles from "./UsersPage.module.css";
import { useState, useEffect } from "react";
import User from "../../components/User";
import { UserRoundCog, CircleCheckBig } from "lucide-react";
import MiniCardUser from "../../components/MiniCardUser";

function UsersPage() {
    //const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user`);
    //             const json = await res.json();
    //             setData(json);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const users = [
        {
            "id": "08de4f8d-a5af-4feb-8032-1ee89e4f952e",
            "userName": "gabrielr4@gmail.com.br",
            "emailConfirmed": false,
            "cargo": "Supervisor",
            "departamento": "Infraestrutura",
            "name": "Gabriel Ramos"
        },
        {
            "id": "08de4f9f-4361-4bba-86a5-831ce646aaa8",
            "userName": "gabriel.amos@example.com",
            "emailConfirmed": true,
            "cargo": "Supervisor",
            "departamento": "Infraestrutura",
            "name": "Gabriel Ramos"
        },
    ]

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <section className={styles.header}>
                    <Title title="Usuários" text="Gerencie os acessos ao sistema" />
                    <ButtonPage text="Usuário" />
                </section>
                <div className={styles.cards}>
                    <MiniCardUser
                        text="Total"
                        icon={<UserRoundCog size={16} color="#f97015" />}
                        data={users.length}
                    />
                    <MiniCardUser
                        text="Ativos"
                        icon={<CircleCheckBig size={16} color="hsl(142 71% 45%)" />}
                        data={users.filter(user => user.emailConfirmed === true).length}
                    />

                </div>
            </section>
            <section className={styles.containerTwo}>
                {users.map(user => {
                    return (<User
                        id={user.id}
                        email={user.userName}
                        ativo={user.emailConfirmed}
                        cargo={user.cargo}
                        departamento={user.departamento}
                        nome={user.name}
                    />)
                })}
            </section>
        </main>
    )
}

export default UsersPage;