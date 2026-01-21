import FieldForm from "../FieldForm";
import styles from "./FormCar.module.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../ui/select"
import { useState } from "react";
import { createCar } from "../../api/cars.api";

const marcasPorModelo = {
    "Uno": "Fiat",
    "Uno Mille": "Fiat",
    "Kwid": "Renault",
    "Ka": "Ford",
    "Up!": "Volkswagen",
    "Palio": "Fiat",
    "Argo": "Fiat",
    "Siena": "Fiat",
    "Fiorino": "Fiat",
    "Celta": "Chevrolet",
    "Classic": "Chevrolet",
    "Montana": "Chevrolet",
    "Gol": "Volkswagen",
    "Saveiro": "Volkswagen",
    "Sandero": "Renault",
    "Fiesta": "Ford",
    "Focus": "Ford",
    "Doblo": "Fiat"
}



function FormCar({ setIsOpen, setCars, cars }) {
    const [model, setModel] = useState("");
    const [marca, setMarca] = useState("");
    const [placa, setPlaca] = useState("");
    const [color, setColor] = useState("Azul");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const placaFilter = cars.some(car => car.placa.toUpperCase() === placa.toUpperCase())

        if (placaFilter) {
            return toast.error("A placa inserida já existe")
        }

        const carData = {
            Model: model,
            Marca: marca,
            Placa: placa.toUpperCase(),
            Color: color,
        }

        await createCar(carData)
            .then((response) => {
                setCars(prevCars => [...prevCars, response.data])
                setIsOpen(false);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status != 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            })

    }

    const handleModelChange = (novoModelo) => {
        setModel(novoModelo);

        const marcaCorrespondente = marcasPorModelo[novoModelo];

        if (marcaCorrespondente) {
            setMarca(marcaCorrespondente);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Novo Carro</h1>
                <div className={styles.select}>
                    <label>Modelo</label>
                    <SelectRoot value={model} onValueChange={handleModelChange}>
                        <SelectTrigger />
                        <SelectContent>
                            <SelectItem value="Uno">Uno</SelectItem>
                            <SelectItem value="Uno Mille">Uno Mille</SelectItem>
                            <SelectItem value="Kwid">Kwid</SelectItem>
                            <SelectItem value="Ka">Ka</SelectItem>
                            <SelectItem value="Up!">Up!</SelectItem>
                            <SelectItem value="Palio">Palio</SelectItem>
                            <SelectItem value="Argo">Argo</SelectItem>
                            <SelectItem value="Siena">Siena</SelectItem>
                            <SelectItem value="Fiorino">Fiorino</SelectItem>
                            <SelectItem value="Celta">Celta</SelectItem>
                            <SelectItem value="Onix">Onix</SelectItem>
                            <SelectItem value="Classic">Classic</SelectItem>
                            <SelectItem value="Montana">Montana</SelectItem>
                            <SelectItem value="Gol">Gol</SelectItem>
                            <SelectItem value="Saveiro">Saveiro</SelectItem>
                            <SelectItem value="Sandero">Sandero</SelectItem>
                            <SelectItem value="Fiesta">Fiesta</SelectItem>
                            <SelectItem value="Focus">Focus</SelectItem>
                            <SelectItem value="Doblo">Doblo</SelectItem>
                        </SelectContent>
                    </SelectRoot>
                </div>
                <FieldForm
                    type="text"
                    placeholder="LSK5834"
                    field="Placa"
                    setThing={setPlaca}
                />
                <div className={styles.containerSelect}>
                    <div className={styles.select}>
                        <label>Cor</label>
                        <SelectRoot value={color} onValueChange={setColor}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="Azul">Azul</SelectItem>
                                <SelectItem value="Vermelho">Vermelho</SelectItem>
                                <SelectItem value="Verde">Verde</SelectItem>
                                <SelectItem value="Branco">Branco</SelectItem>
                                <SelectItem value="Preto">Preto</SelectItem>
                                <SelectItem value="Prata">Prata</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                    <div className={styles.selectInput}>
                        <label>Marca</label>
                        <input
                            type="text"
                            readOnly
                            value={marca}
                        />
                    </div>
                </div>
                <button className={styles.btn} type="submit">Criar carro</button>
                <button className={styles.btnCancel} type="click" onClick={() => setIsOpen(false)}>Cancelar</button>
            </form >
            <ToastContainer position="top-right" autoClose={3000} />
        </div >
    )
}


export default FormCar;