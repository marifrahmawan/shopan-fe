import { IReview, reviewSchema } from "@/utils/api/review";

import { SlidersHorizontal, Star } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem, FormControl, FormMessage } from "./ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductReviews = () => {
  const form = useForm<IReview>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      reviewText: "",
    },
  });

  const submitReviewHandler = (values: IReview) => {
    console.log(values);
  };

  return (
    <div className="w-full pt-9">
      <h6 className="font-mediom">Reviews</h6>
      <div className="flex items-center">
        <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
        <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
        <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
        <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
        <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
        <p className="ml-4 text-[18px] font-medium">11 Reviews</p>
      </div>

      <div className="mt-3 w-full">
        <Form {...form}>
          <form
            className="flex w-full items-center rounded-xl border p-1 pr-2"
            onSubmit={form.handleSubmit(submitReviewHandler)}
          >
            <FormField
              control={form.control}
              name="reviewText"
              render={({ field }) => (
                <FormItem className="h-[70px] w-full">
                  <FormControl className="h-full">
                    <Textarea
                      placeholder="Write your Rewiews..."
                      className="min-h-full resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="rounded-full">Submit Review</Button>
          </form>

          <div className="mt-7 flex justify-between">
            <h6 className="font-medium">11 Reviews</h6>
            <div className="flex items-center gap-2">
              <SlidersHorizontal />
              <Select>
                <SelectTrigger className="w-[180px] rounded-full">
                  <SelectValue placeholder="Newest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5stars">5 Stars</SelectItem>
                  <SelectItem value="4stars">4 Stars</SelectItem>
                  <SelectItem value="3stars">3 Stars</SelectItem>
                  <SelectItem value="2stars">2 Stars</SelectItem>
                  <SelectItem value="1stars">1 Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full">
            <div className="mt-7 w-full border-b pb-5">
              <div className="flex gap-4">
                <div className="h-14 w-14">
                  <section className="min-h-full min-w-full">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </section>
                </div>
                <div>
                  <p className="text-[18px] font-semibold">Sofia Harvetz</p>
                  <div className="flex items-start">
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <p className="ml-2 text-[12px] font-medium text-neutral-500 dark:text-neutral-400">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full">
                <p className="font-medium text-neutral-500 dark:text-neutral-400">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
            </div>

            <div className="mt-7 w-full border-b pb-5">
              <div className="flex gap-4">
                <div className="h-14 w-14">
                  <section className="min-h-full min-w-full">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </section>
                </div>
                <div>
                  <p className="text-[18px] font-semibold">Sofia Harvetz</p>
                  <div className="flex items-start">
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <p className="ml-2 text-[12px] font-medium text-neutral-500 dark:text-neutral-400">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full">
                <p className="font-medium text-neutral-500 dark:text-neutral-400">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
            </div>

            <div className="mt-7 w-full border-b pb-5">
              <div className="flex gap-4">
                <div className="h-14 w-14">
                  <section className="min-h-full min-w-full">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </section>
                </div>
                <div>
                  <p className="text-[18px] font-semibold">Sofia Harvetz</p>
                  <div className="flex items-start">
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <p className="ml-2 text-[12px] font-medium text-neutral-500 dark:text-neutral-400">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full">
                <p className="font-medium text-neutral-500 dark:text-neutral-400">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
            </div>

            <div className="mt-7 w-full border-b pb-5">
              <div className="flex gap-4">
                <div className="h-14 w-14">
                  <section className="min-h-full min-w-full">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </section>
                </div>
                <div>
                  <p className="text-[18px] font-semibold">Sofia Harvetz</p>
                  <div className="flex items-start">
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <Star className="h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500" />
                    <p className="ml-2 text-[12px] font-medium text-neutral-500 dark:text-neutral-400">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full">
                <p className="font-medium text-neutral-500 dark:text-neutral-400">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full justify-center">
            <Button className="rounded-3xl">Load More</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProductReviews;
