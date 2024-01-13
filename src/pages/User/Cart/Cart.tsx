import { useEffect, useState } from "react";
import { ICart, getUserCart } from "@/utils/api/cart";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { toast } from "@/components/ui/use-toast";

const Cart = () => {
  const [cart, setCart] = useState<ICart | undefined>();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await getUserCart();

        setCart(res?.data);
      } catch (error) {
        if (error instanceof CustomHttpError) {
          toast({
            variant: "destructive",
            description: error.message,
          });
        }
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 mt-5">
        {cart?.products.map((data) => (
          <div key={data._id} className="rounded-lg border p-2">
            <p>{data.productId.productName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
