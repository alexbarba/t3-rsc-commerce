import { router } from "../trpc";
import { product } from "./routes";

export const appRouter = router({
  product,
});

// export type definition of API
export type AppRouter = typeof appRouter;
