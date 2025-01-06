export default function ProductList() {
  const products = [
    { title: "Banana", id: 1 },
    { title: "Apple", id: 2 },
    { title: "Orange", id: 3 },
  ];

  const productElements = products.map((product) => {
    return <li key={product.id}>{product.title}</li>;
  });

  return <ul>{productElements}</ul>;
}
