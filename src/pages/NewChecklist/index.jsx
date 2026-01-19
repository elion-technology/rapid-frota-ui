import { useState } from "react";
import InputChecklist from "./InputChecklist";
import styles from "./NewChecklist.module.css"
import {
    SelectRoot,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "../../components/ui/select"

function NewChecklist() {
    const [car, setCar] = useState("Infraestrutura");

    const [cars, setCars] = useState([])

    return (
        <main className={styles.container}>
            <form action="">
                <h1>Checklist</h1>
                <div>
                    <div className={styles.select}>
                        <label>Carro</label>
                        <SelectRoot value={car} onValueChange={setCar}>
                            <SelectTrigger />
                            <SelectContent>
                                <SelectItem value="Infraestrutura">Infraestrutura</SelectItem>
                                <SelectItem value="Residencial">Residencial</SelectItem>
                                <SelectItem value="Engenharia">Engenharia</SelectItem>
                                <SelectItem value="Diretoria">Diretoria</SelectItem>
                                <SelectItem value="Financeiro">Financeiro</SelectItem>
                                <SelectItem value="Outro">Outro</SelectItem>
                            </SelectContent>
                        </SelectRoot>
                    </div>
                    <div>
                        <label>Condutor</label>
                        <input type="text" value="Pedro" readOnly/>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>Funciona</span>
                            </td>
                            <td>
                                <span>Não funciona</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="1" part="Freio de pé" />
                        <InputChecklist name="2" part="Freio de estacionamento" />
                        <InputChecklist name="3" part="Motor de partida" />
                        <InputChecklist name="4" part="Limpador de Parabrisa" />
                        <InputChecklist name="5" part="Lavador de Parabrisa" />
                        <InputChecklist name="6" part="Buzina" />
                        <InputChecklist name="7" part="Faróis" />
                        <InputChecklist name="8" part="Lanternas dianteiras(seta)" />
                        <InputChecklist name="9" part="Lanternas traseiras(seta)" />
                        <InputChecklist name="10" part="Luz de ré" />
                        <InputChecklist name="11" part="Luz da placa" />
                        <InputChecklist name="12" part="Indicadores de painel" />
                        <InputChecklist name="13" part="Cinto de segurança" />
                        <InputChecklist name="14" part="Luz de freio" />
                        <InputChecklist name="15" part="Fechamento de janelas" />
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>Possui</span>
                            </td>
                            <td>
                                <span>Não possui</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="16" part="Triangulo de advertência" />
                        <InputChecklist name="17" part="Macaco" />
                        <InputChecklist name="17" part="Chave de roda" />
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>Bom</span>
                            </td>
                            <td>
                                <span>Ruim</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="19" part="Condição dos pneus" />
                        <InputChecklist name="20" part="Pneu estepe" />
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>Normal</span>
                            </td>
                            <td>
                                <span>Possui avarias</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="21" part="Vidros" />
                        <InputChecklist name="22" part="Portas" />
                        <InputChecklist name="23" part="Para-choque dianteiro" />
                        <InputChecklist name="24" part="Para-choque traseiro" />
                        <InputChecklist name="25" part="Lataria" />
                        <InputChecklist name="26" part="Espelho retrovisores" />
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>No nível</span>
                            </td>
                            <td>
                                <span>Completar</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="27" part="Nível de óleo" />
                        <InputChecklist name="28" part="Nível fluido de freio" />
                        <InputChecklist name="29" part="Nível de água" />
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <span>Descrição</span>
                            </td>
                            <td>
                                <span>Sim</span>
                            </td>
                            <td>
                                <span>Não</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <InputChecklist name="30" part="Documentação do carro" />
                        <InputChecklist name="31" part="O veículo possui vazamentos" />
                    </tbody>
                </table>
            </form>
        </main>
    )
}

export default NewChecklist;