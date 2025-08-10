import { useState } from "react";
import SearchBar from "./search-bar";
import CartList from "./cart-page";
import FiltersPage from "./filters-page"

export default function NavBar({AllProductsInfo, filters, setFilters , query, setQuery , products , setProducts}) {
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    return (
    <div className="flex max-sm:flex-col items-center justify-between px-6 py-4 bg-white shadow-md gap-2">
        <div className="logo text-3xl font-bold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif', cursor: 'pointer'}} onClick={() => {window.location.reload();}}>
            FakeStore
        </div>

        <div className="flex-1 flex gap-3 justify-center relative">
            <SearchBar query={query} setQuery={setQuery} />
            <div className="relative">
                <button
                        className={`px-4 py-2 rounded-lg transition font-medium ${
                            isOpenFilter
                                ? "bg-red-500 text-white hover:bg-red-600"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                        onClick={() => setIsOpenFilter((prev) => {
                            if(prev) {
                                return !prev;
                            } else {
                                if(isOpenCart) {
                                    setIsOpenCart(false);
                                }
                                
                                return !prev;
                            }
                        })}
                    >
                        {isOpenFilter ? <span>Close&nbsp;</span> : "Filters"}
                    </button>
                    {isOpenFilter && (
                        <>
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                onClick={() => setIsOpenFilter(false)}
                                >
                            </div>
                            <FiltersPage className="z-50"
                                AllProductsInfo={AllProductsInfo}
                                filters={filters}
                                setFilters={setFilters}
                            />
                        </>
                    )}
            </div>
        </div>

            <div className="relative">
                <button
                    className={`-mt-0.5 px-4 py-2 rounded-lg transition font-medium ${
                        isOpenCart
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setIsOpenCart((prev) => {
                    if(prev) {
                        return !prev;
                    } else {
                        if(isOpenFilter) {
                            setIsOpenFilter(false);
                        }
                        
                        return !prev;
                    }
                })}
                >
                    {isOpenCart ? "Close" : <span>&nbsp;Cart&nbsp;</span>}
                </button>

                {isOpenCart && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setIsOpenCart(false)}
                            >
                        </div>
                        <CartList className="z-50"
                            products={products}
                            setProducts={setProducts}
                        />
                    </>
                )}
            </div>
    </div>
    );
}
