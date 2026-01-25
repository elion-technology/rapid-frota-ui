import styles from "./ChecklistModal.module.css";
import { X } from "lucide-react";

function ChecklistModal({ thisChecklist, setIsOpen }) {

    const itensChecados = Object.entries(thisChecklist).slice(6).filter(([key]) => !key.toLowerCase().includes("descricao"))
    const descricoesValores = Object.entries(thisChecklist).slice(6).filter(([key]) => key.toLowerCase().includes("descricao"))

    const descricoesCorrigidas = [
        "Freio de Pé",
        "Freio de Estacionamento",
        "Motor de Partida",
        "Limpador de Para-brisa",
        "Lavador de Para-brisa",
        "Buzina",
        "Faróis",
        "Lanternas Dianteiras",
        "Lanternas Traseiras",
        "Luz de Ré",
        "Luz da Placa",
        "Indicadores de Painel",
        "Cinto de Segurança",
        "Luz de Freio",
        "Fechamento de Janelas",
        "Triângulo de Advertência",
        "Macaco",
        "Chave de Roda",
        "Condição dos Pneus",
        "Pneu Estepe",
        "Vidros",
        "Portas",
        "Para-choque Dianteiro",
        "Para-choque Traseiro",
        "Lataria",
        "Espelhos Retrovisores",
        "Nível de Óleo",
        "Nível do Fluido de Freio",
        "Nível de Água",
        "Documentação do Carro",
        "Possui Vazamentos"
    ]


    return (
        <div className={styles.container}>
            <div className={styles.containerCheck}>
                <div className={styles.header}>
                    <h1>Checklist #{thisChecklist.id}</h1>
                    <X onClick={() => setIsOpen(false)} />
                </div>
                <div className={styles.containerInfosCheck}>
                    <div className={styles.inputs}>
                        <span>Placa do Carro</span>
                        <input type="text" className={styles.input} readOnly value={thisChecklist.car.placa} />
                    </div>
                    <div className={styles.inputs}>
                        <span>Condutor Responsável</span>
                        <input type="text" className={styles.input} readOnly value={thisChecklist.condutor.name} />
                    </div>
                    <div className={styles.inputs}>
                        <span>Data</span>
                        <input type="text" className={styles.input} readOnly value={thisChecklist.data} />
                    </div>
                    <div className={styles.inputs}>
                        <span>Hora</span>
                        <input type="text" className={styles.input} readOnly value={thisChecklist.hora} />
                    </div>
                    <div className={styles.containerItens}>
                        <p>Itens checados:</p>
                        <div className={styles.itens}>

                            {itensChecados.map((item, index) => {
                                return item[1] === true ?
                                    <div className={styles.itensStatusOk}>
                                        <p>{descricoesCorrigidas[index]}</p>
                                        <span>Ok</span>
                                    </div>
                                    :
                                    <div className={styles.itensStatusErro}>
                                        <p>{descricoesCorrigidas[index]} </p>
                                        <input type="text" value={descricoesValores[index][1]} readOnly />
                                    </div>
                            })}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChecklistModal;