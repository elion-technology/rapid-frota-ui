import styles from "./TecnicosPage.module.css"
import { useState, useEffect } from "react";
import HeaderPage from "../../components/HeaderPage";
import SearchBar from "../../components/SearchBar";
import MiniCardUser from "../../components/MiniCardUser"
import Tecnico from "../../components/Tecnico";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getTecnicos } from "../../api/tecnicos.api";
import FormTecnico from "../../components/FormTecnico";

function TecnicosPage() {
    const [tecnicos, setTecnicos] = useState([]);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getTecnicos()
            .then(res => setTecnicos(res.data))
            .catch((error) => {
                setTecnicos([]);
                if(error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if(error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            });
    }, []);


    const filteredCars = Array.isArray(tecnicos) ? tecnicos.filter(tecnico =>
        tecnico.name.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.number.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.email.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.setor.toLowerCase().includes(search.toLowerCase()) ||
        tecnico.car?.placa?.toLowerCase().includes(search.toLowerCase())
    ) : []

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Técnicos"
                    textTitle="Gerencie sua frota de veículos"
                    textBtn="Técnico"
                    setIsOpen={() => setIsOpen(true)}
                />
                <MiniCardUser
                        text="Total de Técnicos"
                        data={tecnicos.length}
                    />
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.cards}>
                {filteredCars.map(tec => {
                    return <Tecnico thisTecnico={tec} key={tec.id} />
                })}
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
            {isOpen && (
                <FormTecnico setIsOpen={setIsOpen} setTecnicos={setTecnicos}/>
            )}
        </main>
    )
}

export default TecnicosPage;