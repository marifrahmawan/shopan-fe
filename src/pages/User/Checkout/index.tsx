import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CustomHttpError } from "@/utils/api/CustomHttpError";
import {
  UserCheckoutType,
  addUserCheckout,
  userCheckoutSchema,
} from "@/utils/api/checkout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useLocation, useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { RpConvertion } from "@/utils/utils";

import { EMPTY_CART } from "@/utils/redux/userCartSlice";

const Checkout = () => {
  const state = useLocation();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<UserCheckoutType>({
    resolver: zodResolver(userCheckoutSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      province: "",
      zipCode: "",
    },
  });

  const submitHandler = async (body: UserCheckoutType) => {
    try {
      const res = await addUserCheckout(body, cart);
      toast({
        description: res?.message,
      });

      dispatch(EMPTY_CART());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          description: error.message,
        });
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="w-full py-5 text-center text-[26px] font-semibold">
        Checkout Form
      </h1>
      <div className="flex justify-center gap-5 px-[150px]">
        <div className="w-full">
          <Form {...form}>
            <form
              id="checkoutForm"
              onSubmit={form.handleSubmit(submitHandler)}
              className="rounded-lg border p-4"
            >
              <div className="mb-3 flex w-full gap-3">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem className="mb-3 w-full">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="mb-3 w-full">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mb-6 flex gap-3">
                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Province</FormLabel>
                      <FormControl>
                        <Input placeholder="Province" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Zip Code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>

        <div className="h-fit min-w-[340px] max-w-[340px] rounded-lg border p-3">
          {cart.map((cartData) => (
            <div key={cartData._id} className="border-b pb-2">
              <div className="flex gap-2">
                <div className="mb-2  max-h-[120px] min-h-[120px] min-w-[120px] max-w-[120px] overflow-hidden rounded-md">
                  <img
                    src={cartData.productPicture}
                    alt={cartData.productName}
                    className="h-full w-full"
                  />
                </div>
                <div className="flex w-full items-center justify-between pl-3">
                  <p>{cartData.quantity} pcs</p>
                  <p className="text-secondary-orange">
                    {RpConvertion(cartData.price)}
                  </p>
                </div>
              </div>
              <p className="w-fit text-[12px] font-medium">
                {cartData.productName}
              </p>
            </div>
          ))}

          <div className="mt-4 flex justify-between">
            <p>Shipping</p>
            <p className="font-semibold capitalize">
              {state.state.shippingChoice}
            </p>
          </div>

          <div className="flex justify-between">
            <p></p>
            <p>
              {state.state.shippingChoice === "free"
                ? RpConvertion(0)
                : state.state.shippingChoice === "express"
                ? RpConvertion(200000)
                : state.state.shippingChoice === "pick-up"
                ? RpConvertion(-100000)
                : ""}
            </p>
          </div>

          <div className="mt-4 flex justify-between text-[18px] font-bold text-secondary-green">
            <p>Total</p>
            <p>{state.state.totalPrice}</p>
          </div>
          <Button
            className="mt-4 w-full"
            form="checkoutForm"
            disabled={!form.formState.isValid}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
