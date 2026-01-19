import styles from "./TecnicosPage.module.css"
import { useState, useEffect } from "react";
import HeaderPage from "../../components/HeaderPage";
import SearchBar from "../../components/SearchBar";
import MiniCardUser from "../../components/MiniCardUser"
import Tecnico from "../../components/Tecnico";

function TecnicosPage() {
    const [tecnicos, setTecnicos] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchTecnicos = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tec`, {
                    method: "GET",
                    credentials: "include"
                });

                if (!res.ok) {
                    console.log("Não autorizado:", res.status);
                    return;
                }

                const json = await res.json();
                setTecnicos(json);


            } catch (err) {
                console.error(err);
            }
        };

        fetchTecnicos();
    }, []);


    const filteredCars = tecnicos.filter(tecnico =>
        tecnico.name.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.number.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.email.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.setor.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.car?.placa?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Técnicos"
                    textTitle="Gerencie sua frota de veículos"
                    textBtn="Técnico"
                />
                <MiniCardUser
                        text="Total de Técnicos"
                        data={tecnicos.length}
                    />
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.cards}>
                {filteredCars.map(tec => {
                    return <Tecnico thisTecnico={tec} />
                })}
            </section>
        </main>
    )
}

export default TecnicosPage;