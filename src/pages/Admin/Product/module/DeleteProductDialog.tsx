import { useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IProduct, deleteProduct, getProducts } from "@/utils/api/products";
import { toast } from "@/components/ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IProps {
  children: React.ReactNode;
  productId: string;
  productName: string;
  setProducts: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>;
}

const DeleteProductDialog = (props: IProps) => {
  const { children, productId, productName, setProducts } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deleteHandler = async () => {
    try {
      setIsLoading(true);
      const res = await deleteProduct(productId);
      const fetchProducts = await getProducts();

      setProducts(fetchProducts?.data);
      toast({
        description: res?.message,
      });
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          description: error.message,
        });
      }
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="font-medium text-secondary-red">
              {productName}
            </span>{" "}
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            className="bg-red-600 text-white hover:bg-red-500"
            onClick={deleteHandler}
            aria-disabled={isLoading}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2Icon className="animate-spin" /> Processing
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProductDialog;
