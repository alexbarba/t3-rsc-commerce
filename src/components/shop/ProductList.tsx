import type { Product } from "@prisma/client";
import type { FC } from "react";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex w-full min-w-[14rem] max-w-sm flex-col gap-3 rounded-md border border-slate-300 p-4">
      <p className="text-xl">{product.name}</p>
      <p>{product.description}</p>
      <p>
        {new Intl.NumberFormat("es-MX", {
          currency: "MXN",
          style: "currency",
        }).format(Number(product.price))}
      </p>
      <button className="cursor-pointer border border-slate-100 p-4">
        Agregar al carrito
      </button>
    </div>
  );
};

const ProductList: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <ul className="grid auto-cols-max grid-flow-col-dense gap-4">
      {[...products, ...products, ...products].map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
