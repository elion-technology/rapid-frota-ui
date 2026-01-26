import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../ui/select"
import { useState, useEffect } from "react";
import { getCars } from "../../api/cars.api";
import { createTicket } from "../../api/tickets.api";
import styles from "./FormTicket.module.css"
import FieldForm from "../FieldForm";

function FormTicket({ setIsOpen, setTickets }) {
    const [status, setStatus] = useState("Pendente");
    const [custo, setCusto] = useState("")
    const [oficina, setOficina] = useState("")
    const [dataPrevista, setDataPrevista] = useState("")
    const [descricao, setDescricao] = useState("")


    const [cars, setCars] = useState([])
    const [carId, setCarId] = useState("0")

    useEffect(() => {
        getCars()
            .then(res => setCars(res.data))
            .catch((error) => {
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            });
    }, []);

    const formatCurrency = (rawValue) => {

        let digits = rawValue.replace(/\D/g, "");


        if (!digits) return "";

        const amount = (Number(digits) / 100).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true
        });

        return amount;
    };

    const handleChange = (e) => {
        const rawValue = e.target.value;
        const formattedValue = formatCurrency(rawValue);
        setCusto(formattedValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const valueForBackend = custo.replace(/,/g, '');

        const dataSeparada = dataPrevista.split("/")

        const dataFormatada = `${dataSeparada[2]}-${dataSeparada[1]}-${dataSeparada[0]}T17:00:00`

        const ticketData = {
            Custo: valueForBackend,
            DataPrevista: dataFormatada,
            Oficina: oficina,
            CarId: +carId === 0 ? null : +carId,
            Status: status,
            Descricao: descricao
        }

        await createTicket(ticketData)
            .then((response) => {
                setTickets(prevTickets => [...prevTickets, response.data])
                setIsOpen(false);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            })
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Novo Técnico</h1>
                <div className={styles.containerSelect}>
                    <div className={styles.select}>
                        <label>Status *</label>
                        <SelectRoot value={status} onValueChange={setStatus}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="Pendente">Pendente</SelectItem>
                                <SelectItem value="Agendada">Agendada</SelectItem>
                                <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                                <SelectItem value="Concluída">Concluída</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                    <div className={styles.select}>
                        <label>Carro</label>
                        <SelectRoot value={carId} onValueChange={setCarId}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="0">Nenhum</SelectItem>
                                {Array.isArray(cars) ? cars.map((car, index) => {
                                    return <SelectItem value={car.id.toString()} key={index + 1}>{car.placa}</SelectItem>
                                }) : ""}
                            </SelectContent>
                        </SelectRoot>
                    </div>
                </div>
                <FieldForm
                    type="text"
                    placeholder="Zé Auto-Peças"
                    field="Oficina"
                    setThing={setOficina}
                />
                <div className={styles.textarea}>
                    <label>Custo</label>
                    <input
                        className={styles.inputCusto}
                        type="text"
                        value={custo}
                        onChange={handleChange}
                        placeholder="0.00"
                    />
                </div>

                <FieldForm
                    type="date"
                    placeholder="01/02/2026"
                    field="Data Prevista"
                    setThing={setDataPrevista}
                />
                <div className={styles.textarea}>
                    <label>Descrição</label>
                    <textarea onChange={(e) => setDescricao(e.target.value)} placeholder="Descreva o problema..."></textarea>
                </div>

                <button className={styles.btn} type="submit">Criar Ticket</button>
                <button className={styles.btnCancel} type="click" onClick={() => setIsOpen(false)}>Cancelar</button>
            </form >
            <ToastContainer position="top-right" autoClose={3000} />
        </div >
    )
}

export default FormTicket