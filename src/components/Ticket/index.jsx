import { Ellipsis, SquarePen, Check } from "lucide-react";
import styles from "./Ticket.module.css"
import { useState } from "react";

function Ticket({ thisTicket }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.containerTitle}>
                    <h2 className={styles.title}>{`#${thisTicket.id} - ${thisTicket.car.placa}`}</h2>
                    <p className={styles.oficina}> {thisTicket.oficina}</p>
                </div>
                <div className={styles.btn}>
                    <Ellipsis onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} />
                    {isOpen && (
                        <div className={styles.select}>
                            <button><SquarePen size={14}/> Interagir</button>
                            <button><Check size={14}/>Finalizar</button>
                        </div>
                    )}
                </div>

            </div>
            <div className={styles.infos}>
                <div className={styles.fieldInfos}>
                    <span>Status</span>
                    <div className={
                        thisTicket.status === "Pendente" ? styles.novo :
                        thisTicket.status === "Agendada" ? styles.agendada :
                        thisTicket.status === "Finalizada" ? styles.finalizado :
                        styles.andamento
                    }>
                        {thisTicket.status}
                    </div>
                </div>
                <div className={styles.fieldInfos}>
                    <span>Custo</span>
                    <p>{`R$ ${thisTicket.custo}`}</p>
                </div>
                <div className={styles.fieldInfos}>
                    <span>Data Abertura</span>
                    <p>{thisTicket.dataAbertura}</p>
                </div>
                <div className={styles.fieldInfos}>
                    <span>Entrega Prevista</span>
                    <p>{thisTicket.dataPrevisao}</p>
                </div>
            </div>
            <div className={styles.descricao}>
                <span>Descrição</span>
                <p>{thisTicket.descricao}</p>
            </div>

        </div>
    )
}

export default Ticket;