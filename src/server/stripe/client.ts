import Stripe from "stripe";
import { env } from "../../env/server.mjs";

export const stripe = new Stripe(env.STRIPE_SK, {
  apiVersion: "2022-08-01",
});
