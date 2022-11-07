import { prisma } from "server/db/client";

export const revalidate = 30; // revalidate every 30 sec

const getProducts = () => prisma.product.findMany();

const page = async () => {
  const products = await getProducts();
  return (
    <div>
      Esta es nuestra tienda
      <ul>
        <li>
          {products.map((product) => (
            <p key={product.id}>{product.name}</p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default page;
