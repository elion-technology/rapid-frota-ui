import { useState } from "react";

function InputChecklist({ part, name }) {
    const [tipo, setTipo] = useState(true);
    const [data, setData] = useState("");

    return (
        <div>
            <span>{part}</span>
            <input type="radio" 
                name={`}gr${name}` }
                value={true}
                checked={tipo === true}
                onChange={() => setTipo(true)} 
            />
            <input
                type="radio" 
                name={`}gr${name}` }
                value={false}
                checked={tipo === false}
                onChange={() => setTipo(false)} 
            />

            {!tipo && <input type="text" placeholder="Descreva a problema..." onChange={(e) => setData(e.target.value)} />}
        </div>
    )
}

export default InputChecklist;