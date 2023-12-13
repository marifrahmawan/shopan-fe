import { useForm } from "react-hook-form";
import { ProductType, productSchema } from "@/utils/api/products";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddProductForm = () => {
  const form = useForm<ProductType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      productDetail: "",
      productPrice: 1,
      productBrand: "",
      productAvailable: true,
      productStock: 1,
      productPicture: [""],
    },
  });

  const productSubmitHandler = async (values: ProductType) => {
    console.log(values);
  };

  return (
    <div className="container">
      <p className="w-full text-center text-[34px] font-semibold">
        My Products
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(productSubmitHandler)}>
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productDetail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Textarea placeholder="Product Detail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
