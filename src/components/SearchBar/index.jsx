import styles from "./SearchBar.module.css"
import { Search } from "lucide-react";

function SearchBar({ setSearch }) {
    return (
        <div className={styles.search}>
            <Search size={16} color="hsl(220 10% 46%)" />
            <input type="text" placeholder="Buscar..." onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default SearchBar;