import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./InputLogin.module.css"

function InputLogin({ folder, placeholder, type, icon }) { 
    //const [isOn, setOn] = useState(icon);
    const [inputType, setInputType] = useState(type);
   

    let varControlIcon = true;

    return (
        <div className={styles.container}>
            <p>{folder}</p>
            <div>
                <input type={inputType} placeholder={placeholder}/>
                {icon && (
                    inputType === "password" ?
                    <Eye size={20} onClick={() => { setInputType("text")}} /> :
                    <EyeOff size={20} onClick={() => { setInputType("password")}}/>
                )}
            </div>
        </div>
    )
}

export default InputLogin;