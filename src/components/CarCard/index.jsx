import { Car } from "lucide-react";
import EntityCard from "../EntityCard"
import styles from "./CarCard.module.css"
import FieldCar from "./FieldCar";

function CarCard({ thisCar }) {
    return (
        <div className={styles.container}>
            <EntityCard
                icon={<Car color="#f97015" />}
                title={thisCar.placa}
                subtitle={`${thisCar.marca} ${thisCar.model}`}
            />

            {thisCar.tecnico === null ? "" :
                <div className={styles.containerInfo}>
                    <FieldCar
                        label="Técnico"
                        text={thisCar.tecnico.name}
                    />
                </div>
            }


        </div>
    )
}

export default CarCard;