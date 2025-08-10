export default function SearchBar({query , setQuery}) {

    function handleChange(e) {
        setQuery(e.target.value);
    }


    return (
        <input type="text" placeholder="Search for product..." value={query} onChange={handleChange} className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"/>
    );
}