import ProductCard from "./product-card";

export default function ProductList({query , filters , products , setProducts}) {

  const filteredProducts = products.filter((obj) => {
    const matchesQuery = obj.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(obj.category);
    const matchesPrice =
      obj.price >= filters.minPrice && obj.price <= filters.maxPrice;

    return matchesQuery && matchesCategory && matchesPrice;
  });

    let content;

    if (query.length > 2) {
        content = filteredProducts.map((obj) => (
        <ProductCard
        key={obj.id}
        product={obj}
        setProducts={setProducts}
        />
    ));
    } else {
        content = filteredProducts.map((obj) => (
        <ProductCard
        key={obj.id}
        product={obj}
        setProducts={setProducts}
        />
    ));
    }

    return <ul>{content}</ul>;

}