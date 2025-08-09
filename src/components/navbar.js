import { useState } from "react";
import SearchBar from "./search-bar";

export default function NavBar({ query, setQuery }) {
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    return (
        <div className="nav">
            <div className="logo">
            </div>

            <div>
                <SearchBar query={query} setQuery={setQuery} />
            </div>

            <div>
                <button className={isOpenFilter ? "close filters" : "filters"} onClick={() => setIsOpenFilter(prev => !prev)}>
                </button>
                <button className={isOpenCart ? "Close Cart" : "Cart"} onClick={() => setIsOpenCart(prev => !prev)}>
                </button>
            </div>
        </div>
    );
}
