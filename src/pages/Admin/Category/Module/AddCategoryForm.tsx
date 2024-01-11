import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import {
  AddCategoryType,
  ICategory,
  addCategory,
  addCategorySchema,
  getCategory,
} from "@/utils/api/category";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

interface IProps {
  children: React.ReactNode;
  setCategoryData: React.Dispatch<React.SetStateAction<ICategory[] | undefined>>
}

const AddCategoryForm = (props: IProps) => {
  const { children, setCategoryData } = props;
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<AddCategoryType>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      categoryName: "",
      categoryImage: undefined,
    },
  });

  const submitHandler = async (data: AddCategoryType) => {
    try {
      const res = await addCategory(data);
      toast({
        description: res?.message,
      });

      form.reset();
      const fetchCategory = await getCategory()

      setCategoryData(fetchCategory?.data)
      setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)}>
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
              <DialogDescription>
                Add Category for products in store.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: Sepatu"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoryImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Picture</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/jpg, image/jpeg, image/png"
                        multiple={false}
                        disabled={form.formState.isSubmitting}
                        onChange={(e) =>
                          field.onChange(
                            e.target.files ? e.target.files[0] : "",
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-[150px]"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2Icon className="animate-spin" /> Processing
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryForm;
