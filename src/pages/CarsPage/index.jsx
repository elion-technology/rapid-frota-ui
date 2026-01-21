import styles from "./CarsPage.module.css"
import { useState, useEffect } from "react";
import HeaderPage from "../../components/HeaderPage";
import SearchBar from "../../components/SearchBar";
import FormCar from "../../components/FormCar/index.jsx";
import CarCard from "../../components/CarCard";
import MiniCardUser from "../../components/MiniCardUser";
import { getCars } from "../../api/cars.api.js"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CarsPage() {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getCars()
            .then(res => setCars(res.data))
            .catch((error) => {
                if(error.response.status === 401) {
                    return toast.error("Não autorizado!");
                } else if(error.response.status != 200) {
                    return toast.error("Erro! Verificar com suporte");
                }
            });
    }, []);


    const filteredCars = cars.filter(car =>
        car.color?.toLowerCase().includes(search.toLowerCase()) ||
        car.placa?.toLowerCase().includes(search.toLowerCase()) ||
        car.model?.toLowerCase().includes(search.toLowerCase()) ||
        car.marca?.toLowerCase().includes(search.toLowerCase()) ||
        car.tecnico?.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Carros"
                    textTitle="Gerencie sua frota de veículos"
                    textBtn="Carro"
                    setIsOpen={setIsOpen}
                />
                <MiniCardUser
                    text="Total de Carros"
                    data={cars.length}
                />
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.cards}>
                {filteredCars.map(car => {
                    return <CarCard thisCar={car} key={car.id}/>
                })}
            </section>
            <ToastContainer position="top-right" autoClose={3000} />

            {isOpen && (
                <FormCar setIsOpen={setIsOpen} setCars={setCars} cars={cars}/>
            )}
        </main>
    )
}

export default CarsPage;