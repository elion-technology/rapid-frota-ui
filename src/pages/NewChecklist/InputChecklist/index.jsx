import { useState } from "react";

function InputChecklist({ part, name }) {
    const [tipo, setTipo] = useState(true);
    const [data, setData] = useState("");
    console.log(data);

    return (
        <tr>
            <td>
                <span>{part}</span>
            </td>
            <td>
                <input type="radio"
                    name={`}gr${name}`}
                    value={true}
                    checked={tipo === true}
                    onChange={() => setTipo(true)}
                />
            </td>
            <td>
                <input
                    type="radio"
                    name={`}gr${name}`}
                    value={false}
                    checked={tipo === false}
                    onChange={() => setTipo(false)}
                />
            </td>
            <td>
                {!tipo && <input type="text" placeholder="Descreva a problema..." onChange={(e) => setData(e.target.value)} />}
            </td>
        </tr>
    )
}

export default InputChecklist;