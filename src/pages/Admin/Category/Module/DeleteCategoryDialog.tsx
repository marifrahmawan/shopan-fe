import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { ICategory, deleteCategory, getCategory } from "@/utils/api/category";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

interface IProps {
  children: React.ReactNode;
  categoryId: string;
  categoryName: string;
  setCategoryData: React.Dispatch<
    React.SetStateAction<ICategory[] | undefined>
  >;
}

const DeleteCategoryDialog = (props: IProps) => {
  const { children, categoryId, categoryName, setCategoryData } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deleteHandler = async () => {
    try {
      setIsLoading(true);
      await deleteCategory(categoryId);
      const fetchCategory = await getCategory();

      setCategoryData(fetchCategory?.data);
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
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="font-medium text-secondary-red">
              {categoryName}
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

export default DeleteCategoryDialog;
