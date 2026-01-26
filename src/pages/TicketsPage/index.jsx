import Ticket from "../../components/Ticket"
import styles from "./TicketsPage.module.css"
import { useEffect, useState } from "react";
import FormTicket from "../../components/FormTicket";
import { getTickets } from "../../api/tickets.api";
import HeaderPage from "../../components/HeaderPage";
import MiniCardUser from "../../components/MiniCardUser";
import SearchBar from "../../components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function TicketsPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [tickets, setTickets] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getTickets()
            .then(res => setTickets(res.data.sort((a, b) => b.id - a.id)))
            .catch((error) => {
                setTickets([]);
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            })
    }, [])

    const filteredTickets = Array.isArray(tickets) ? tickets.filter(ticket =>
        ticket.car.placa.toLowerCase().includes(search.toLowerCase()) ||
        ticket.dataAbertura.toLowerCase().includes(search.toLowerCase()) ||
        ticket.dataPrevisao.toLowerCase().includes(search.toLowerCase()) ||
        ticket.status.toLowerCase().includes(search.toLowerCase()) ||
        ticket.oficina.toLowerCase().includes(search.toLowerCase()) 
    ) : []

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Tickets"
                    textTitle="Gerencie sua frota de veículos"
                    textBtn="Ticket"
                    setIsOpen={() => setIsOpen(true)}
                />
                <MiniCardUser
                    text="Total de Tickets"
                    data={tickets.length}
                />
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.cards}>
                {filteredTickets.map(tick => {
                    return <Ticket thisTicket={tick} key={tick.id} />
                })}
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
            {isOpen && (
                <FormTicket setIsOpen={setIsOpen} setTickets={setTickets} />
            )}
        </main>
    )
}

export default TicketsPage;