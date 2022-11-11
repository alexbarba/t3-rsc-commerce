import useSWR from "swr";
import type { Product } from "@prisma/client";

const fetcher = (url: string) =>
  JSON.parse(localStorage.getItem(url) || "{ items: [] }, quantity: 0");

type CartItem = Product;

type Cart = {
  items: CartItem[];
};

export const useCart = () => {
  const { data, error, mutate } = useSWR<Cart>("cart", fetcher);

  const addToCart = (product: CartItem) => {
    const newCart = data || { items: [] };
    const item = newCart.items.find((item) => item.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      newCart.items.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    mutate();
  };

  const removeFromCart = (id: string) => {
    const newCart = {
      items: data?.items.filter((item) => item.id !== id) ?? [],
    };
    localStorage.setItem("cart", JSON.stringify(newCart));
    mutate();
  };

  return {
    cart: data,
    addToCart,
    isLoading: !error && !data,
    isError: error,
    removeFromCart,
  };
};

export default useCart;
