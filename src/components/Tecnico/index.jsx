import styles from "./Tecnico.module.css"
import EntityCard from "../EntityCard";
import FieldTecnico from "./FieldTecnico";

function Tecnico({ thisTecnico }) {
    return (
        <div className={styles.container}>
            <EntityCard
                icon={thisTecnico.name.slice(0, 2)}
                title={thisTecnico.name}
                subtitle={thisTecnico.email}
            />
            <div className={styles.containerInfo}>
                {thisTecnico.car === null ? <FieldTecnico
                    value="------"
                    text="Placa"
                /> : <FieldTecnico
                    value={thisTecnico.car.placa}
                    text="Placa"
                />}

                <FieldTecnico
                    value={thisTecnico.setor}
                    text="Setor"
                />
            </div>
        </div>
    )
}

export default Tecnico;