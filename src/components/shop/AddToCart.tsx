"use client";
import useCart from "@hooks/useCart";
import type { Product } from "@prisma/client";

const AddToCart = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  // const { data: product } = useProduct(id);

  return (
    <section className="relative w-full">
      <button className="btn peer w-full" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
      <span className="absolute inset-x-0 top-0 origin-top scale-0 rounded-md bg-violet-700/70 p-2 text-center text-sm text-violet-200 duration-200 peer-focus:-translate-y-10 peer-focus:scale-100">
        ¡Agregado correctamente!
      </span>
    </section>
  );
};

export default AddToCart;
