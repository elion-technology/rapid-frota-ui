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
import { createChecklist } from "../../api/checklists.api";
import { useNavigate } from "react-router-dom";

function NewChecklist() {
    const navigate = useNavigate();

    const [carId, setCarId] = useState("");
    const [cars, setCars] = useState([])
    const [checklist, setChecklist] = useState([{ key: "freioDePe", label: "Freio de pé", value: true, descricao: "" },
    { key: "freioDeEstacionamento", label: "Freio de estacionamento", value: true, descricao: "" },
    { key: "motorDePartida", label: "Motor de partida", value: true, descricao: "" },
    { key: "limpadorDeParabrisa", label: "Limpador de parabrisa", value: true, descricao: "" },
    { key: "lavadorDeParabrisa", label: "Lavador de parabrisa", value: true, descricao: "" },
    { key: "buzina", label: "Buzina", value: true, descricao: "" },
    { key: "farois", label: "Faróis", value: true, descricao: "" },
    { key: "lanternasDianteiras", label: "Lanternas dianteiras (seta)", value: true, descricao: "" },
    { key: "lanternasTraseiras", label: "Lanternas traseiras (seta)", value: true, descricao: "" },
    { key: "luzDeRe", label: "Luz de ré", value: true, descricao: "" },
    { key: "luzDaPlaca", label: "Luz da placa", value: true, descricao: "" },
    { key: "indicadoresDePainel", label: "Indicadores de painel", value: true, descricao: "" },
    { key: "cintoDeSeguranca", label: "Cinto de segurança", value: true, descricao: "" },
    { key: "luzDeFreio", label: "Luz de freio", value: true, descricao: "" },
    { key: "fechamentoDeJanelas", label: "Fechamento de janelas", value: true, descricao: "" },
    { key: "trianguloDeAdvertencia", label: "Triângulo de advertência", value: true, descricao: "" },
    { key: "macaco", label: "Macaco", value: true, descricao: "" },
    { key: "chaveDeRoda", label: "Chave de roda", value: true, descricao: "" },
    { key: "condicaoDosPneus", label: "Condição dos pneus", value: true, descricao: "" },
    { key: "pneuEstepe", label: "Pneu estepe", value: true, descricao: "" },
    { key: "vidros", label: "Vidros", value: true, descricao: "" },
    { key: "portas", label: "Portas", value: true, descricao: "" },
    { key: "paraChoqueDianteiro", label: "Para-choque dianteiro", value: true, descricao: "" },
    { key: "paraChoqueTraseiro", label: "Para-choque traseiro", value: true, descricao: "" },
    { key: "lataria", label: "Lataria", value: true, descricao: "" },
    { key: "espelhosRetrovisores", label: "Espelhos retrovisores", value: true, descricao: "" },
    { key: "nivelDeOleo", label: "Nível de óleo", value: true, descricao: "" },
    { key: "nivelFluidoDeFreio", label: "Nível fluido de freio", value: true, descricao: "" },
    { key: "nivelDeAgua", label: "Nível de água", value: true, descricao: "" },
    { key: "documentacaoDoCarro", label: "Documentação do carro", value: true, descricao: "" },
    { key: "possuiVazamentos", label: "O veículo possui vazamentos", value: true, descricao: "" }
    ]);

    const selectedCar = Array.isArray(cars) ? cars.find(c => c.id.toString() === carId) : "";

    const updateValue = (key, newValue) => {
        setChecklist(prev =>
            prev.map(item =>
                item.key === key
                    ? { ...item, value: newValue }
                    : item
            )
        );
    };

    const updateDescricao = (key, descricao) => {
        setChecklist(prev =>
            prev.map(item =>
                item.key === key
                    ? { ...item, descricao }
                    : item
            )
        );
    };

    const payload = {
        carId: Number(carId),
        condutorId: selectedCar?.tecnico?.id,
        aprovado: checklist.some(item => item.value === false)
            ? false
            : true,

        ...Object.fromEntries(
            checklist.map(item => [item.key, item.value])
        ),

        ...Object.fromEntries(
            checklist.map(item => [
                `${item.key}Descricao`,
                item.descricao?.trim() || null
            ])
        )
    }

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

    const handleSubmit = (body) => {
        const itensInvalidos = checklist.filter(
            item => item.value === false && !item.descricao.trim()
        );

        if (itensInvalidos.length > 0) {
            const labels = itensInvalidos.map(i => i.label).join(", ");
            toast.error(
                `Descreva o problema para: ${labels}`
            );
            return false;
        }

        createChecklist(body)
            .then(() => {
                navigate("/checklists")
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status !== 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            });
    }

    return (
        <main className={styles.container}>
            <form className={styles.form} onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(payload)
            }}>
                <h1>Novo Checklist</h1>
                <div className={styles.infos}>
                    <div className={styles.select}>
                        <label>Carro</label>
                        <SelectRoot value={carId} onValueChange={setCarId}>
                            <SelectTrigger />
                            <SelectContent>
                                {Array.isArray(cars) ? cars.map((carro) => {
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
                        {checklist.map(item => (
                            <InputChecklist
                                key={item.key}
                                itemKey={item.key}
                                item={item}
                                onChangeValue={updateValue}
                                onChangeDescricao={updateDescricao}
                            />
                        ))}
                    </tbody>
                </table>
                <button className={styles.btn} type="submit">Finalizar Checklist</button>
                <button className={styles.cancel} type="button" onClick={() => navigate("/checklists")}>Cancelar</button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </main>
    )
}

export default NewChecklist;