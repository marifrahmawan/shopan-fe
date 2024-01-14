/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { ScrollRestoration, useParams } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dot, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import ProductQuestions from "@/components/ProductQuestions";
import ProductCarousel from "@/components/ProductCarousel";
import ProductReviews from "@/components/ProductReviews";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { RpConvertion, cn } from "@/utils/utils";

import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { ADD_PRODUCT_TO_CART } from "@/utils/redux/userCartSlice";
import { IProduct, getProductById } from "@/utils/api/products";
import { addToCart } from "@/utils/api/cart";

const Product = () => {
  const { product_id } = useParams();
  const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  const [showAllDescription, setShowAllDescription] = useState(false);
  const [product, setProduct] = useState<IProduct | undefined>();

  const [numberOfOrders, setNumberOfOrders] = useState(1);
  const [dimension, setDimension] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<string | undefined>(undefined);

  const fetchProduct = async () => {
    try {
      const res = await getProductById(product_id!);

      setProduct(res?.data);
    } catch (error: any) {
      toast({
        description: <p>{error.message}</p>,
      });
    }
  };

  const addToCartHandler = async (productId: string) => {
    try {
      const res = await addToCart(
        productId,
        numberOfOrders,
        color,
        dimension,
        size,
      );

      dispatch(
        ADD_PRODUCT_TO_CART({
          _id: Math.random().toString(),
          productId: productId,
          productName: product!.productName,
          productPicture: product!.productPicture[0],
          quantity: numberOfOrders,
          size: size,
          color: color,
          dimension: dimension,
          price: product!.productPrice,
        }),
      );

      toast({
        description: <p>{res?.message}</p>,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: <p>{error.message}</p>,
      });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mt-7">
      <ScrollRestoration />
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="max-w-full flex-1 lg:max-w-[600px]">
          <ProductCarousel>
            {product?.productPicture.map((productPic) => (
              <div
                className="aspect-[1/1] h-[300px] cursor-grab object-cover md:h-full lg:h-[600px]"
                key={productPic}
              >
                <img src={productPic} className="h-full object-cover" />
              </div>
            ))}
          </ProductCarousel>
        </div>

        <div className="flex-1">
          <div className="border-6eutral-400 border-b pb-4">
            <h4 className="font-medium text-[26px]">{product?.productName}</h4>
            <div className="flex">
              <div className="flex items-center">
                <Star className="w h-[16px] w-[16px] fill-yellow-500 stroke-yellow-500" />
                <Star className="h-[16px] w-[16px] fill-yellow-500 stroke-yellow-500" />
                <Star className="h-[16px] w-[16px] fill-yellow-500 stroke-yellow-500" />
                <Star className="h-[16px] w-[16px] fill-yellow-500 stroke-yellow-500" />
                <Star className="h-[16px] w-[16px] fill-yellow-500 stroke-yellow-500" />
                <p className="ml-4 font-medium">11 Reviews</p>
              </div>
              <Dot />
              <p className="font-medium">0 Sold</p>
              <Dot />
              <p className="font-medium text-secondary-green">
                {product?.productStock} in Stocks
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: product?.productDetail as TrustedHTML,
              }}
              className={cn(
                "mt-3 overflow-hidden text-ellipsis text-[14px] text-neutral-500 dark:text-neutral-400",
                showAllDescription
                  ? " line-clamp-[0] h-full"
                  : "line-clamp-[7] h-[150px]",
              )}
            />
            <Button
              className="h-fit bg-transparent p-0 font-semibold text-secondary-green hover:bg-transparent"
              onClick={() => setShowAllDescription((prevState) => !prevState)}
            >
              {showAllDescription
                ? "Lihat Lebih Sedikit"
                : "Lihat Selengkapnya"}
            </Button>
            <span className="mt-6 flex items-center gap-3">
              <h6 className="font-semibold text-secondary-green text-[18px]">
                {RpConvertion(product?.productPrice)}
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

          {user?.role !== "admin" && (
            <section>
              {product?.productColor[0] !== undefined && (
                <div className="mt-5">
                  <p className="font-medium">Choose colors</p>
                  <section className="mt-1 flex gap-2">
                    {product.productColor.map((dataColor) => (
                      <Button
                        variant="outline"
                        size="sm"
                        key={dataColor}
                        onClick={() => setColor(dataColor)}
                        className={cn(
                          "hover:bg-secondary-orange",
                          `${color === dataColor ? "bg-secondary-orange" : ""}`,
                        )}
                      >
                        {dataColor}
                      </Button>
                    ))}
                  </section>
                </div>
              )}

              {product?.productSize[0] !== undefined && (
                <div className="mt-5">
                  <p className="font-medium">Choose size</p>
                  <section className="mt-1 flex gap-2">
                    {product.productSize.map((dataSize) => (
                      <Button
                        variant="outline"
                        size="icon"
                        key={dataSize}
                        onClick={() => setSize(dataSize)}
                        className={cn(
                          "hover:bg-secondary-orange",
                          `${size === dataSize ? "bg-secondary-orange" : ""}`,
                        )}
                      >
                        {dataSize}
                      </Button>
                    ))}
                  </section>
                </div>
              )}

              {product?.productDimension[0] !== undefined && (
                <div className="mt-5">
                  <p className="font-medium">Choose dimensions</p>
                  <section className="mt-1 flex gap-2">
                    {product!.productDimension.map((dataDimension) => (
                      <Button
                        variant="outline"
                        size="icon"
                        key={dataDimension}
                        onClick={() => setDimension(dataDimension)}
                        className={cn(
                          "hover:bg-secondary-orange",
                          `${dimension === dataDimension ? "bg-secondary-orange" : ""}`,
                        )}
                      >
                        {dataDimension}
                      </Button>
                    ))}
                  </section>
                </div>
              )}
            </section>
          )}

          {user?.role !== "admin" && (
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
              <Button
                className="mt-4 w-full lg:max-w-[425px]"
                onClick={() => addToCartHandler(product?._id as string)}
              >
                <ShoppingCart /> <p className="pl-4">Add to Cart</p>
              </Button>
            </div>
          )}

          <div className="mt-5 flex gap-7 pb-5 text-[12px]">
            <p className="font-medium">Category</p>
            <p className="text-neutral-400">{product?.productCategory}</p>
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
