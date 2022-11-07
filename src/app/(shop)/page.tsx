import { prisma } from "server/db/client";
import { ProductList } from "@components/shop";
export const revalidate = 30; // revalidate every 30 sec

const getProducts = () => prisma.product.findMany();

const page = async () => {
  const products = await getProducts();

  return (
    <>
      Esta es nuestra tienda
      <ProductList products={products} />
    </>
  );
};

export default page;
