import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ctx}) => {
    const listings = await ctx.db.listing.findMany();
    return listings;
  })
});
