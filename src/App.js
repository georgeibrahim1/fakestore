import { useEffect, useState } from "react";
import ProductList from "./components/products-list"


function App() {
  // products , setProducts
  // filters , setFilters

  const [products,setProducts] = useState([]);
  const [filters,setFilters] = useState({});
  const [query , setQuery] = useState("");
  const [Loading,setLoading] = useState(false);
  const [IsError,setIsError] = useState("");

  /*
    filters : 
      - catogery : [] ??
      - min price -> -infinity
      - max price -> infinity
  */


  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if(!res.ok) throw new Error("");

        for(let i = 0 ; i < data.size() ; i++) {
          data[i].cartItems = 0; // add a new key
          // get the catogeries array and the min and max price for the read only filters section
        }

        setProducts([...data , products]); // to add to the intial products
        setLoading(false);

      } catch(err) {
        setIsError(err.message);
      }
    }

    getProducts();

  }, [])


  return (
    <ProductList >

    </ProductList>
  );

}

export default App;
