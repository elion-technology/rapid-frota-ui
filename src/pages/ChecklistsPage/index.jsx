import styles from "./ChecklistsPage.module.css"
import HeaderPage from "../../components/HeaderPage";
import MiniCardUser from "../../components/MiniCardUser";
import SearchBar from "../../components/SearchBar";
import Checklist from "../../components/Checklist";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { getChecklists } from "../../api/checklists.api";
import { ToastContainer, toast } from "react-toastify";
import { FileCheck, CircleCheckBig, CircleX } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import ChecklistModal from "../../components/ChecklistModal";

function ChecklistsPage({ setCanAccess }) {

    const month = String(new Date().getMonth() + 1).padStart(2, "0")

    const navigate = useNavigate();
    const [checklists, setChecklists] = useState([]);
    const [search, setSearch] = useState("");
    const [checklist, setChecklist] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (selectedChecklist) => {
        setChecklist(selectedChecklist);
        setIsOpen(true);
    }

    useEffect(() => {
        getChecklists()
            .then(res => setChecklists(res.data))
            .catch((error) => {
                setChecklists([])
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            })
    }, [])


    const filteredChecklists = Array.isArray(checklists) ? checklists.filter(check =>
        check.data?.toLowerCase().includes(search.toLowerCase()) ||
        check.hora?.toLowerCase().includes(search.toLowerCase()) ||
        check.car.placa?.toLowerCase().includes(search.toLowerCase()) ||
        check.condutor?.name?.toLowerCase().includes(search.toLowerCase())
    ) : []

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Checklists"
                    textTitle="Gerencie sua frota de veículos"
                    textBtn="Checklist"
                    setIsOpen={() => {
                        setCanAccess(true)
                        setTimeout(() => navigate("/checklist/new"), 0);
                    }}
                />
                <div className={styles.miniCard}>
                    <MiniCardUser
                        icon={<FileCheck size={16} color="#f97015" />}
                        text="Total"
                        data={checklists.length}
                    />
                    <MiniCardUser
                        text="Sem Avarias"
                        icon={<CircleCheckBig size={16} color="hsl(142 71% 45%)" />}
                        data={checklists.filter(check => check.aprovado === true).length}
                    />
                    <MiniCardUser
                        icon={<CircleX size={16} color="#ff2c2c" />}
                        text="Com Avarias"
                        data={checklists.filter(check => check.aprovado === false).length}
                    />
                    <MiniCardUser
                        icon={<FileCheck size={16} color="#f97015" />}
                        text="Total Mês"
                        data={checklists.filter(check => check.data.split("/")[1] == month).length}
                    />
                </div>
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.cards}>
                {filteredChecklists.map((check, index) => <Checklist thisChecklist={check} openModal={openModal} key={index + 1}/>)}
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
            {isOpen && (
                <ChecklistModal thisChecklist={checklist} setIsOpen={setIsOpen}/>
            )}
        </main >
    )
}

export default ChecklistsPage;