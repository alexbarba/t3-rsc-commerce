import type { Product } from "@prisma/client";
import type { FC } from "react";
import ProductCard from "./ProductCard";

const ProductList: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
