import { useState, useEffect } from "react";
import { getCars } from "../../api/cars.api";
import InputChecklist from "./InputChecklist";
import styles from "./NewChecklist.module.css"
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../../components/ui/select";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function NewChecklist() {
    const [carId, setCarId] = useState("");
    const [cars, setCars] = useState([])

    const selectedCar = Array.isArray(cars) ? cars.find(c => c.id.toString() === carId) : "";

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

    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <h1>Novo Checklist</h1>
                <div className={styles.infos}>
                    <div className={styles.select}>
                        <label>Carro</label>
                        <SelectRoot value={carId} onValueChange={setCarId}>
                            <SelectTrigger />
                            <SelectContent>
                                {Array.isArray(cars) ?cars.map((carro) => {
                                    return <SelectItem value={`${carro.id}`} key={carro.id}>{carro.placa}</SelectItem>
                                }) : ""}
                            </SelectContent>
                        </SelectRoot>
                    </div>
                    <div className={styles.infoCar}>
                        <div className={styles.containerInput}>
                            <label>Condutor</label>
                            <input type="text" value={selectedCar?.tecnico?.name} readOnly className={styles.inputPassword} />
                        </div>
                        <div className={styles.containerInput}>
                            <label>Setor</label>
                            <input type="text" value={selectedCar?.tecnico?.setor} readOnly className={styles.inputPassword} />
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>Ok</span>
                            </td>
                            <td>
                                <span>Erro</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="1" part="Freio de pé" />
                        <InputChecklist name="2" part="Freio de estacionamento" />
                        <InputChecklist name="3" part="Motor de partida" />
                        <InputChecklist name="4" part="Limpador de Parabrisa" />
                        <InputChecklist name="5" part="Lavador de Parabrisa" />
                        <InputChecklist name="6" part="Buzina" />
                        <InputChecklist name="7" part="Faróis" />
                        <InputChecklist name="8" part="Lanternas dianteiras(seta)" />
                        <InputChecklist name="9" part="Lanternas traseiras(seta)" />
                        <InputChecklist name="10" part="Luz de ré" />
                        <InputChecklist name="11" part="Luz da placa" />
                        <InputChecklist name="12" part="Indicadores de painel" />
                        <InputChecklist name="13" part="Cinto de segurança" />
                        <InputChecklist name="14" part="Luz de freio" />
                        <InputChecklist name="15" part="Fechamento de janelas" />
                        <InputChecklist name="16" part="Triangulo de advertência" />
                        <InputChecklist name="17" part="Macaco" />
                        <InputChecklist name="18" part="Chave de roda" />
                        <InputChecklist name="19" part="Condição dos pneus" />
                        <InputChecklist name="20" part="Pneu estepe" />
                        <InputChecklist name="21" part="Vidros" />
                        <InputChecklist name="22" part="Portas" />
                        <InputChecklist name="23" part="Para-choque dianteiro" />
                        <InputChecklist name="24" part="Para-choque traseiro" />
                        <InputChecklist name="25" part="Lataria" />
                        <InputChecklist name="26" part="Espelho retrovisores" />
                        <InputChecklist name="27" part="Nível de óleo" />
                        <InputChecklist name="28" part="Nível fluido de freio" />
                        <InputChecklist name="29" part="Nível de água" />
                        <InputChecklist name="30" part="Documentação do carro" />
                        <InputChecklist name="31" part="O veículo possui vazamentos" />
                    </tbody>
                </table>
                <button>Finalizar Checklist</button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </main>
    )
}

export default NewChecklist;