import { router } from "../trpc";
import { stripeRouter } from "./stripe";
import { userRouter } from "./user";

export const appRouter = router({
  stripe: stripeRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
