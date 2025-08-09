export default function SearchBar({query , setQuery}) {

    function handleChange(e) {
        setQuery(e.target.value);
    }


    return (
        <input type="text" placeholder="Search for product..." value={query} onChange={handleChange}/>
    );
}