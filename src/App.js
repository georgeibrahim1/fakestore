import { useEffect, useState } from "react";
import ProductList from "./components/products-list"
import NavBar from "./components/navbar";

  const AllProductsInfo = {
    Allcatogeries: [],
    minPriceEver: Number.MAX_SAFE_INTEGER,
    maxPriceEver: Number.MIN_SAFE_INTEGER,
  };

export default function App() {

  const [products,setProducts] = useState([]);
  const [filters,setFilters] = useState({categoryArr:[] , minPrice:0 , maxPrice:0});
  const [query , setQuery] = useState("");
  const [Loading,setLoading] = useState(false);
  const [IsError,setIsError] = useState(false);


  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if(!res.ok) throw new Error("");

        for(let i = 0 ; i < data.length ; i++) { 
          data[i].cartItems = 0; // add a new key
          if(!AllProductsInfo.Allcatogeries.includes(data[i].category))
            AllProductsInfo.Allcatogeries.push(data[i].category);
          AllProductsInfo.minPriceEver = Math.min(AllProductsInfo.minPriceEver,data[i].price);
          AllProductsInfo.maxPriceEver = Math.max(AllProductsInfo.maxPriceEver,data[i].price);
        }
        
        setFilters((obj) => {
          const setUpFilter = {
            ...obj,
            minPrice: AllProductsInfo.minPriceEver,
            maxPrice: AllProductsInfo.maxPriceEver
          }

          return setUpFilter;
        });

        console.log(AllProductsInfo);
        setProducts(data); // to add to the intial products
        setLoading(false);

      } catch(err) {
        setIsError(true);
      }
    }

    getProducts();

  }, [])

  let content;
  if (!IsError) {
      if (Loading) {
          content = <p>Loading...</p>;
      } else {
          content = (
              <>
                  <NavBar 
                    query={query} 
                    setQuery={setQuery} 
                    products={products} 
                    setProducts={setProducts}
                    AllProductsInfo={AllProductsInfo}
                    filters={filters}
                    setFilters={setFilters}
                  />
                  <ProductList
                      query={query}
                      filters={filters}
                      products={products}
                      setProducts={setProducts}
                  />
              </>
          );
      }
  } else {
      content = <p className="text-3xl font-bold underline">Something went wrong. Please try again later.</p>;
  }

  return <div>{content}</div>;

}
