"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import useCart from "@hooks/useCart";
import type { FC } from "react";
import { TrashIcon } from "@radix-ui/react-icons";

const Cart: FC = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <div>
      <Link href="/" className="flex cursor-pointer items-center">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Regresar a la tienda
      </Link>
      <h4 className="my-4 text-3xl">Carrito</h4>
      <ul>
        {cart?.items.map((item) => (
          <li
            key={item.id}
            className="my-4 flex gap-4 border border-slate-200 p-4"
          >
            <span>
              {item.quantity} x {item.name}
            </span>
            <button onClick={() => removeFromCart(item.id)}>
              <TrashIcon className="mx-2 h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4">
        <span>
          Total:{" "}
          {new Intl.NumberFormat("es-MX", {
            currency: "MXN",
            style: "currency",
          }).format(
            Number(
              cart?.items.reduce(
                (prev, actual) => Number(actual.price) * actual.quantity,
                0
              )
            )
          )}
        </span>
        <button className="btn">Comprar</button>
      </div>
    </div>
  );
};

export default Cart;
