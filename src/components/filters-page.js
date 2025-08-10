export default function FiltersPage({ AllProductsInfo, filters, setFilters }) {

    function handleOnChangeMax(e) {
        let value = Number(e.target.value);

        if (value > AllProductsInfo.maxPriceEver) value = AllProductsInfo.maxPriceEver;
        if (value < AllProductsInfo.minPriceEver) value = AllProductsInfo.minPriceEver;

        setFilters(prev => ({
            ...prev,
            maxPrice: value
        }));
    }

    function handleOnChangeMin(e) {
        let value = Number(e.target.value);

        if (value > AllProductsInfo.maxPriceEver) value = AllProductsInfo.maxPriceEver;
        if (value < AllProductsInfo.minPriceEver) value = AllProductsInfo.minPriceEver;

        setFilters(prev => ({
            ...prev,
            minPrice: value
        }));
    }

    function handleRemoveFilter(cat) {
        setFilters(prev => ({
            ...prev,
            categoryArr: prev.categoryArr.filter(c => c !== cat)
        }));
    }

    function handleAddFilter(cat) {
        setFilters(prev => ({
            ...prev,
            categoryArr: [...prev.categoryArr, cat]
        }));
    }


return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-lg rounded-xl border border-gray-200 z-50 p-4 max-h-[400px] overflow-y-auto overflow-hidden">
        <div className="flex flex-col justify-between mb-2">
            <h2 className="text-lg font-semibold border-b pb-1 text-gray-800">All Categories</h2>
            <div className="space-y-1 mt-2 border-b">
                <>
                {AllProductsInfo.Allcatogeries.map(cat => {
                    const isActive = filters.categoryArr.includes(cat);
                    return (
                        <p
                            className={`cursor-pointer px-2 py-1 rounded-md transition-colors duration-200 ${
                                isActive
                                    ? "bg-blue-100 text-blue-600 font-medium"
                                    : "hover:bg-gray-100 text-gray-600"
                            }`}
                            onClick={() =>
                                isActive ? handleRemoveFilter(cat) : handleAddFilter(cat)
                            }>
                            {cat}
                        </p>
                    );
                })}
                </>
            </div>
            <h2 className="text-lg font-semibold border-b pb-1 text-gray-800">Prices Range</h2>
            <label className="block mt-3 text-sm font-medium text-gray-700">Max Price : </label>
            <input
                type="number"
                className="mt-3 w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={filters.maxPrice}
                onChange={handleOnChangeMax}
            />
            <label className="block mt-3 text-sm font-medium text-gray-700">Min Price : </label>
            <input
                type="number"
                className="mt-2 w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={filters.minPrice}
                onChange={handleOnChangeMin}
            />
        </div>
    </div> 
);

}
