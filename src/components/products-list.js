import ProductCard from "./product-card";

export default function ProductList({query , filters , products , setProducts}) {

  const filteredProducts = products.filter((obj) => {
    const matchesQuery = obj.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      filters.categoryArr.length === 0 || filters.categoryArr.includes(obj.category);
    const matchesPrice =
      obj.price >= filters.minPrice && obj.price <= filters.maxPrice;

    return matchesQuery && matchesCategory && matchesPrice;
  });

    let content = filteredProducts.map((obj) => (
        <ProductCard
        key={obj.id}
        product={obj}
        setProducts={setProducts}
        />
    ));

    return <ul className="flex flex-wrap gap-4 justify-center py-5">{content}</ul>;

}