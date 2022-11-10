"use client";
import type { Product } from "@prisma/client";
import type { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { trpc } from "client/trpcClient";
import { useRouter } from "next/navigation";
// import { prisma } from "server/db/client";

type Props = {
  product: Product | null;
};

type FormValues = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const ProductForm: FC<Props> = ({ product }) => {
  const router = useRouter();
  const creation = product === null;
  const [editable, setEditable] = useState(creation);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: product?.name ?? "",
      description: product?.description,
      price: Number(product?.price ?? 0),
      quantity: Number(product?.quantity ?? 0),
    },
  });

  const createProduct = trpc.product.create.useMutation({
    async onSuccess() {
      await router.refresh();
      router.push("/products");
    },
  });

  const updateProduct = trpc.product.update.useMutation({
    async onSuccess() {
      await router.refresh();
    },
  });

  const onSubmit = async (data: FormValues) => {
    const { price, quantity, ...rest } = data;
    if (creation) {
      createProduct.mutateAsync({
        slug: createSlug(data.name),
        price: Number(price ?? 0),
        quantity: Number(quantity ?? 0),
        ...rest,
      });
    } else {
      updateProduct.mutateAsync({
        id: String(product?.id),
        price: Number(price ?? 0),
        quantity: Number(quantity ?? 0),
        ...rest,
      });
    }
    setEditable(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-4 p-4">
        <section className="flex justify-end gap-4">
          {!creation ? (
            <button
              onClick={() => {
                return;
              }}
              className="btn"
              type="button"
            >
              Eliminar
            </button>
          ) : null}
          {editable ? (
            <div className="flex justify-end">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditable((v) => !v)}
              className="btn"
              type="button"
            >
              Editar
            </button>
          )}
        </section>

        <label>
          Nombre
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Nombre del producto"
            className="input text-2xl"
            disabled={!editable}
          />
        </label>
        <span className="text-sm text-slate-400">
          {product ? `Slug: ${product?.slug}` : ""}
        </span>

        <label>
          Descripción
          <textarea
            {...register("description")}
            placeholder="Descripción del producto"
            className="input"
            rows={4}
            disabled={!editable}
          />
        </label>
        <fieldset className="flex gap-4">
          <label>
            Precio
            <input
              type="number"
              {...register("price")}
              placeholder="Precio del producto"
              className="input"
              disabled={!editable}
              min={0}
            />
          </label>

          <label>
            Stock
            <input
              type="number"
              {...register("quantity")}
              placeholder="Cantidad del producto"
              className="input"
              disabled={!editable}
              min={0}
            />
          </label>
        </fieldset>
      </form>
    </>
  );
};

export default ProductForm;
