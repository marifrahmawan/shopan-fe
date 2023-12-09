import * as z from "zod";

export const reviewSchema = z.object({
  reviewText: z.string().min(1, { message: "Review Text Required" }),
});

export type IReview = z.infer<typeof reviewSchema>;
