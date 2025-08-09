import ProductCard from "./product-card";

function ProductList({query , filters , products , setProducts}) {

  const filteredProducts = products.filter((obj) => {
    const matchesQuery = obj.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(obj.category);
    const matchesPrice =
      obj.price >= filters.minPrice && obj.price <= filters.maxPrice;

    return matchesQuery && matchesCategory && matchesPrice;
  });


  // add a condition for the query

  return (
    <ul>
      {filteredProducts.map((obj) => (
        <ProductCard
          key={obj.id}
          product={obj}
          setProducts={setProducts}
        />
      ))}
    </ul>
  );
}