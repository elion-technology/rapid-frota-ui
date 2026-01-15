import InputChecklist from "./InputChecklist";
import styles from "./NewChecklist.module.css"

function NewChecklist() {
    return (
        <main className={styles.container}>
            <form action="">
                <h1>Checklist</h1>
                <div>
                    <span>Descrição</span>
                    <span>Funciona</span>
                    <span>Não funciona</span>
                </div>
                <div>
                    <InputChecklist name="1" part="Freio de pé" />
                    <InputChecklist name="2" part="Freio de estacionamento" />
                    <InputChecklist name="3" part="Motor de partida" />
                    <InputChecklist name="4" part="Limpador de Parabrisa" />
                    <InputChecklist name="5" part="Lavador de Parabrisa" />
                    <InputChecklist name="6" part="Buzina" />
                    <InputChecklist name="6" part="Faróis" />
                    <InputChecklist name="6" part="Lanternas dianteiras" />
                    <InputChecklist name="6" part="Buzina" />
                    <InputChecklist name="6" part="Buzina" />
                </div>
            </form>
        </main>
    )
}

export default NewChecklist;