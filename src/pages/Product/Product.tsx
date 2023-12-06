import { useEffect, useState } from "react";

import { ScrollRestoration, useParams } from "react-router-dom";

import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";

import { products } from "@/data";
import { Circle, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductReviews from "@/components/ProductReviews";
import ProductQuestions from "@/components/ProductQuestions";
import Footer from "@/components/Footer";

interface IProducts {
  id: number;
  productImage: string;
  productName: string;
  price: number;
  ratings: number;
}

const Product = () => {
  const { product_id } = useParams();
  const res = products.filter(({ id }) => {
    return id === parseInt(product_id!);
  })[0];

  const [product, setProduct] = useState<IProducts>();

  const [numberOfOrders, setNumberOfOrders] = useState(1);

  useEffect(() => {
    setProduct(res);
  }, [res]);

  return (
    <div className="container">
      <ScrollRestoration />
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex-1">
          <ProductCarousel>
            <div className="aspect-auto h-[300px] cursor-grab object-cover md:h-[700px]">
              <img src={product?.productImage} className="h-full" />
            </div>
            <div className="aspect-auto h-[300px] cursor-grab object-cover md:h-[700px]">
              <img src={product?.productImage} className="h-full" />
            </div>
            <div className="aspect-auto h-[300px] cursor-grab object-cover md:h-[700px]">
              <img src={product?.productImage} className="h-full" />
            </div>
            <div className="aspect-auto h-[300px] cursor-grab object-cover md:h-[700px]">
              <img src={product?.productImage} className="h-full" />
            </div>
          </ProductCarousel>
        </div>

        <div className="flex-1">
          <div className="border-6eutral-400 border-b pb-4">
            <div className="flex items-center">
              <Star className="w h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
              <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
              <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
              <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
              <Star className="h-[18px] w-[18px] fill-yellow-500 stroke-yellow-500" />
              <p className="ml-4 text-[18px] font-medium">11 Reviews</p>
            </div>
            <h4 className="mt-3 font-medium">{product?.productName}</h4>
            <p className="mt-3 text-[14px] text-neutral-500 dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              repellat voluptas optio totam! Nam repudiandae harum voluptatibus
              esse numquam quam, qui optio mollitia quos! Quos esse fugit
              quisquam amet. Voluptatum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam molestias saepe odio. Atque, officiis
              amet sint quisquam iure ad nihil unde velit saepe fugit vero
              molestias exercitationem sed, cupiditate minima!lore
            </p>
            <span className="mt-6 flex items-center gap-3">
              <h6 className="font-medium text-secondary-green">
                ${product?.price}
              </h6>
              <p className="text-[20px] text-neutral-400 line-through">$650</p>
            </span>
          </div>

          <div className="mt-5 border-b pb-6">
            <p className="text-base">Offer expires in</p>
            <div className="mt-3 flex gap-2">
              <section className="min-w-[66px] text-center">
                <h5 className="rounded-xl bg-neutral-200 p-3 font-medium text-black">
                  02
                </h5>
                <p className="mt-1 text-[14px]">Days</p>
              </section>
              <section className="min-w-[66px] text-center">
                <h5 className="rounded-xl bg-neutral-200 p-3 font-medium text-black">
                  12
                </h5>
                <p className="mt-1 text-[14px]">Hours</p>
              </section>
              <section className="min-w-[66px] text-center">
                <h5 className="rounded-xl bg-neutral-200 p-3 font-medium text-black">
                  45
                </h5>
                <p className="mt-1 text-[14px]">Minutes</p>
              </section>
              <section className="min-w-[66px] text-center">
                <h5 className="rounded-xl bg-neutral-200 p-3 font-medium text-black">
                  05
                </h5>
                <p className="mt-1 text-[14px]">Seconds</p>
              </section>
            </div>
          </div>

          <div className="mt-5">
            <p>Choose colors</p>
            <section className="mt-1 flex gap-2">
              <Circle className="h-[30px] w-[30px] fill-black stroke-black hover:cursor-pointer dark:stroke-white" />
              <Circle className="h-[30px] w-[30px] fill-secondary-green stroke-secondary-green hover:cursor-pointer dark:stroke-white" />
              <Circle className="h-[30px] w-[30px] fill-secondary-blue stroke-secondary-blue hover:cursor-pointer dark:stroke-white" />
              <Circle className="h-[30px] w-[30px] fill-secondary-orange stroke-secondary-orange hover:cursor-pointer dark:stroke-white" />
              <Circle className="h-[30px] w-[30px] fill-secondary-red stroke-secondary-red hover:cursor-pointer dark:stroke-white" />
            </section>
          </div>

          <div className="mt-5">
            <p>Choose size</p>
            <section className="mt-1 flex gap-2">
              <Button size="icon">S</Button>
              <Button size="icon">M</Button>
              <Button size="icon">L</Button>
              <Button size="icon">XL</Button>
            </section>
          </div>

          <div className="mt-10 border-b pb-8">
            <div className="flex gap-4 lg:gap-7">
              <div className="flex w-fit gap-3 rounded-md bg-neutral-100">
                <Button
                  size="icon"
                  className="rounded-r-none bg-transparent"
                  onClick={() => setNumberOfOrders(numberOfOrders - 1)}
                  disabled={numberOfOrders === 1}
                >
                  <Minus className="h-4 w-4 fill-black stroke-black" />
                </Button>
                <p className="flex min-w-[42px] items-center justify-center bg-transparent px-2 text-[16px] font-medium text-black">
                  {numberOfOrders}
                </p>
                <Button
                  size="icon"
                  className="rounded-l-none bg-transparent"
                  onClick={() => setNumberOfOrders(numberOfOrders + 1)}
                >
                  <Plus className="h-4 w-4 fill-black stroke-black" />
                </Button>
              </div>
              <Button className="w-full lg:max-w-[250px]">
                <Heart className="fill-pink-600 stroke-pink-600" />{" "}
                <p className="pl-4">Add to Wishlist</p>
              </Button>
            </div>
            <Button className="mt-4 w-full lg:max-w-[425px]">
              <ShoppingCart /> <p className="pl-4">Add to Cart</p>
            </Button>
          </div>
          <div className="mt-5 flex gap-7 pb-5 text-[12px]">
            <p className="font-medium">Category</p>
            <p className="text-neutral-400">Living Room, Bedroom</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="w-full justify-start p-0">
          <TabsTrigger
            value="reviews"
            className="h-full rounded-none border-black data-[state=active]:border-b data-[state=active]:bg-transparent dark:border-white lg:w-[220px] lg:p-0"
          >
            Reviews
          </TabsTrigger>
          <TabsTrigger
            value="questions"
            className="h-full rounded-none border-black data-[state=active]:border-b data-[state=active]:bg-transparent dark:border-white lg:w-[220px] lg:p-0"
          >
            Questions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="reviews">
          <ProductReviews />
        </TabsContent>
        <TabsContent value="questions">
          <ProductQuestions />
        </TabsContent>
      </Tabs>

      <Footer />
    </div>
  );
};

export default Product;
