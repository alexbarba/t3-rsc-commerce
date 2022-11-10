import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const product = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        slug: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
        quantity: z.number().optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: { ...input },
      });
    }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        slug: z.string(),
        description: z.string(),
        price: z.number(),
        quantity: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: { ...input },
      });
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
