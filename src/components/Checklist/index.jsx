import styles from "./Checklist.module.css"
import TagSubtitle from "../TagSubtitle";
import { CircleCheckBig, CircleX, Eye } from 'lucide-react';

function Checklist({ thisChecklist, openModal }) {
    let valueItens = Object.values(thisChecklist).filter(item => item === false).length

    return (
        <div className={styles.container}>
            <div className={styles.containerMain}>
                <div className={styles.infos}>
                    <h2 className={styles.title}>{thisChecklist.car.placa}</h2>
                    <TagSubtitle
                        text={`${thisChecklist.condutor.name} - ${thisChecklist.data}`}
                        color="#6a7181"
                    />
                </div>

                <div
                    className={styles.status}
                    style={{
                        backgroundColor: thisChecklist.aprovado !== true ? "#ef43431a" : "#21c45d1a",
                        color: thisChecklist.aprovado !== true ? "#ef4343" : "#21c45d",
                    }}
                >
                    {thisChecklist.aprovado !== true ? <p><CircleX size={14} color="#ef4343"/>Falha</p> : <p><CircleCheckBig size={14} color="#21c45d"/>Ok</p> }
                </div>
            </div>
            <div className={styles.containerInfo}>
                <div>
                    <div className={styles.itens}>
                        {`${Object.keys(thisChecklist).filter(item => item.toLowerCase().includes("descricao")).length} itens`}
                    </div>
                    <div
                        className={styles.itens}
                        style={{
                            backgroundColor: valueItens > 0 ? "#ef43431a" : "#21c45d1a",
                            color: valueItens > 0 ? "#ef4343" : "#21c45d",
                        }}
                    >
                        {valueItens > 0 ? `${valueItens - 1} falhas` : `${valueItens} falhas`}
                    </div>
                </div>

                <button className={styles.btn} onClick={() => openModal(thisChecklist)}>
                    <Eye size={20}/>
                    Ver detalhes
                </button>
            </div>
        </div>
    )
}

export default Checklist