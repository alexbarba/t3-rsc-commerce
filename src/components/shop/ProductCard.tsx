import type { FC } from "react";
import type { Product } from "@prisma/client";
import AddToCart from "./AddToCart";
const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex max-h-60 w-full min-w-[14rem] max-w-sm flex-col gap-3 rounded-md border border-slate-300 p-4 sm:h-60">
      <p className="text-xl">{product.name}</p>
      <p className="h-full grow">{product.description}</p>
      <p>
        {new Intl.NumberFormat("es-MX", {
          currency: "MXN",
          style: "currency",
        }).format(Number(product.price))}
      </p>
      <AddToCart product={product} />
    </div>
  );
};

export default ProductCard;
