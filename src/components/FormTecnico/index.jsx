import FieldForm from "../FieldForm";
import styles from "./FormTecnico.module.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../ui/select"
import { use, useEffect, useState } from "react";
import { createTecnico } from "../../api/tecnicos.api.js"
import { getCars } from "../../api/cars.api.js";

const formatPhoneNumber = (value) => {
    if (!value) return value;

    // Remove qualquer caractere que não seja número
    const phoneNumber = value.replace(/[^\d]/g, '');
    const len = phoneNumber.length;

    // (00) 00000-0000
    if (len < 3) return phoneNumber;
    if (len < 7) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
};

function FormTecnico({ setIsOpen, setTecnicos }) {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [setor, setSetor] = useState("Residencial");
    const [name, setName] = useState("");
    const [cars, setCars] = useState([])
    const [carId, setCarId] = useState("0")

    useEffect(() => {
        getCars()
            .then(res => setCars(res.data))
            .catch((error) => {
                if (error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if (error.response.status != 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            });
    }, []);

    const handlePhoneChange = (e) => {
        const input = e.target.value;

        const rawValue = input.replace(/[^\d]/g, '');
        if (rawValue.length <= 11) {
            const formatted = formatPhoneNumber(input);
            setNumber(formatted);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tecnicoData = {
            Email: email,
            Number: number,
            Setor: setor,
            Name: name,
            CarId: +carId === 0 ? null : +carId
        }

        await createTecnico(tecnicoData)
            .then((response) => {
                setTecnicos(prevTecnicos => [...prevTecnicos, response.data])
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

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Novo Técnico</h1>
                <FieldForm
                    type="text"
                    placeholder="Digite o nome e sobrenome"
                    field="Nome"
                    setThing={setName}
                />
                <FieldForm
                    type="email"
                    placeholder="Digite.seu@email.com"
                    field="Email"
                    setThing={setEmail}
                />
                <div className={styles.number}>
                    <label>Número de Celular</label>
                    <input
                        type="text"
                        placeholder="(13)99876-0930"
                        onChange={(e) => handlePhoneChange(e)}
                        required
                        value={number}
                    />
                </div>
                <div className={styles.containerSelect}>
                    <div className={styles.select}>
                        <label>Setor</label>
                        <SelectRoot value={setor} onValueChange={setSetor}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="Residencial">Residencial</SelectItem>
                                <SelectItem value="Infraestrutura">Infraestrutura</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                    <div className={styles.select}>
                        <label>Carro responsável</label>
                        <SelectRoot value={carId} onValueChange={setCarId}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="0">Nenhum</SelectItem>
                                {cars.map((car) => {
                                    return <SelectItem value={car.id.toString()}>{car.placa}</SelectItem>
                                })}
                            </SelectContent>
                        </SelectRoot>

                    </div>
                </div>


                <button className={styles.btn} type="submit">Criar técnico</button>
                <button className={styles.btnCancel} type="click" onClick={() => setIsOpen(false)}>Cancelar</button>
            </form >
            <ToastContainer position="top-right" autoClose={3000} />
        </div >
    )
}


export default FormTecnico;