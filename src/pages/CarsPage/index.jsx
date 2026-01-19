import styles from "./CarsPage.module.css"
import { useState, useEffect } from "react";
import HeaderPage from "../../components/HeaderPage";
import SearchBar from "../../components/SearchBar";
import CarCard from "../../components/CarCard";
import MiniCardUser from "../../components/MiniCardUser";

function CarsPage() {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/car`, {
                    method: "GET",
                    credentials: "include"
                });

                if (!res.ok) {
                    console.log("Não autorizado:", res.status);
                    return;
                }

                const json = await res.json();
                setCars(json);


            } catch (err) {
                console.error(err);
            }
        };

        fetchCars();
    }, []);


    const filteredCars = cars.filter(car =>
        car.color.toLowerCase().includes(search.toLowerCase()) ||
        car.placa.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase()) ||
        car.marca.toLowerCase().includes(search.toLowerCase()) ||
        car.tecnico?.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className={styles.container}>
            <section className={styles.containerOne}>
                <HeaderPage
                    title="Carros"
                    textTitle="Gerencie sua frota de veículos"
                    textBtn="Carro"
                />
                <MiniCardUser
                        text="Total de Carros"
                        data={cars.length}
                    />
                <SearchBar setSearch={setSearch} />
            </section>
            <section className={styles.cards}>
                {filteredCars.map(car => {
                    return <CarCard thisCar={car} />
                })}
            </section>
        </main>
    )
}

export default CarsPage;