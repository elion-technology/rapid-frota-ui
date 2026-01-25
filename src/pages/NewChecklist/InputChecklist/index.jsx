import styles from "./InputChecklist.module.css"

function InputChecklist({ itemKey, onChangeValue, onChangeDescricao, item }) {
    return (
        <tr>
            <td>
                <span>{item.label}</span>
            </td>
            <td>
                <input type="radio"
                    name={itemKey}
                    value={true}
                    checked={item.value === true}
                    onChange={() => onChangeValue(item.key, true)}
                />
            </td>
            <td>
                <input
                    type="radio"
                    name={itemKey}
                    value={false}
                    checked={item.value === false}
                    onChange={() => onChangeValue(item.key, false)}
                />
            </td>
            <td>
                {!item.value && 
                    <textarea 
                        className={styles.describe} 
                        placeholder="Descreva a problema..." 
                        value={item.descricao}
                        onChange={(e) => onChangeDescricao(item.key, e.target.value)} 
                    />
                }
            </td>
        </tr>
    )
}

export default InputChecklist;