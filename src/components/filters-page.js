export default function FiltersPage({ AllProductsInfo, filters, setFilters }) {

    function handleOnChangeMax(e) {
        const value = Number(e.target.value);
        setFilters(prev => ({
            ...prev,
            maxPrice: value
        }));
    }

    function handleOnChangeMin(e) {
        const value = Number(e.target.value);
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

    const allCat = AllProductsInfo.Allcatogeries.map(cat => {
        const isActive = filters.categoryArr.includes(cat);
        return (
            <p
                className={isActive? "active" : "not-active"} 
                key={cat}
                onClick={() =>
                    isActive ? handleRemoveFilter(cat) : handleAddFilter(cat)
                }>
                {cat}
            </p>
        );
    });

    return (
        <div>
            <p>All Categories</p>
            <div>{allCat}</div>
            <input
                type="number"
                value={filters.maxPrice}
                onChange={handleOnChangeMax}
            />
            <input
                type="number"
                value={filters.maxPrice}
                onChange={handleOnChangeMin}
            />
        </div>
    );
}
