import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IProduct,
  updateProduct,
  EditProductType,
  editProductSchema,
} from "@/utils/api/products";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import TipTap from "@/components/AdminComponents/TipTap";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { ICategory, getCategory } from "@/utils/api/category";
import { CustomHttpError } from "@/utils/api/CustomHttpError";

const EditProductForm = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const product: IProduct = state;
  const [categoryData, setCategoryData] = useState<ICategory[] | undefined>([]);

  const [sizeInputColumn, setSizeInputColumn] = useState(
    product.productSize.length,
  );
  const [colorInputColumn, setColorInputColumn] = useState(
    product.productColor.length,
  );
  const [dimensionInputColumn, setDimensionInputColumn] = useState(
    product.productDimension.length,
  );

  const form = useForm<EditProductType>({
    resolver: zodResolver(editProductSchema),
    mode: "onTouched",
    defaultValues: {
      productName: "",
      productDetail: "",
      productCategory: "",
      productPrice: "",
      productBrand: "",
      productAvailable: true,
      productStock: "",
      productPicture: product.productPicture,
      productSize: product.productSize,
      productColor: product.productColor,
      productDimension: product.productDimension,
    },
  });

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await getCategory();

        setCategoryData(res?.data);
      } catch (error) {
        if (error instanceof CustomHttpError) {
          toast({
            variant: "destructive",
            description: error.message,
          });
        }
      }
    };

    fetchCategoryData();
  }, []);

  useEffect(() => {
    const watchSizeInput = form.watch("productSize");
    const watchColorInput = form.watch("productColor");
    const watchDimensionInput = form.watch("productDimension");

    if (watchSizeInput.length > sizeInputColumn) {
      watchSizeInput?.splice(
        watchSizeInput!.length - sizeInputColumn,
        watchSizeInput!.length - sizeInputColumn,
      );
    }
    if (sizeInputColumn === 0) {
      watchSizeInput?.splice(0);
    }

    if (watchColorInput.length > colorInputColumn) {
      watchColorInput.splice(
        watchColorInput.length - colorInputColumn,
        watchColorInput.length - colorInputColumn,
      );
    }

    if (colorInputColumn === 0) {
      watchColorInput.splice(0);
    }

    if (watchDimensionInput.length > dimensionInputColumn) {
      watchDimensionInput?.splice(
        watchDimensionInput.length - dimensionInputColumn,
        watchDimensionInput.length - dimensionInputColumn,
      );
    }
    if (dimensionInputColumn === 0) {
      watchDimensionInput?.splice(0);
    }
  }, [form, sizeInputColumn, colorInputColumn, dimensionInputColumn]);

  useEffect(() => {
    form.setValue("productName", product.productName);
    form.setValue("productDetail", product.productDetail);
    form.setValue("productCategory", product.productCategory);
    form.setValue("productPrice", product.productPrice.toString());
    form.setValue("productBrand", product.productBrand);
    form.setValue("productAvailable", product.productAvailable);
    form.setValue("productStock", product.productStock.toString());
    form.setValue("productPicture", product.productPicture);
  }, []);

  const productSubmitHandler = async (values: EditProductType) => {
    try {
      const res = await updateProduct(product._id, values);

      toast({
        description: <p className="capitalize">{res?.message}</p>,
      });

      setTimeout(() => {
        navigate("/admin/products");
      }, 400);
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          description: <p className="capitalize">{error.message}</p>,
        });
      }
    }
  };

  return (
    <div className="w-[900px] pb-7">
      <p className="mb-5 w-full border-b pb-2 text-[22px] font-semibold">
        {product.productName}
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
              <FormItem className="mt-5">
                <FormLabel>Detail Product</FormLabel>
                <FormControl>
                  <TipTap
                    fieldName={product.productDetail}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productCategory"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={product.productCategory}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryData?.map((data) => (
                      <SelectItem key={data._id} value={data.categoryName}>
                        {data.categoryName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productPrice"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Price</FormLabel>
                <FormControl>
                  <Input placeholder="Product Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productPicture.0"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Pictures 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Pictures 1"
                    type="file"
                    multiple={false}
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) =>
                      field.onChange(
                        e.target.files ? e.target.files[0] : undefined,
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productPicture.1"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Pictures 2</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Pictures 2"
                    type="file"
                    multiple={false}
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) =>
                      field.onChange(
                        e.target.files ? e.target.files[0] : undefined,
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productPicture.2"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Pictures 3</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Pictures 3"
                    type="file"
                    multiple={false}
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) =>
                      field.onChange(
                        e.target.files ? e.target.files[0] : undefined,
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productBrand"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Product Brand" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productAvailable"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Available</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product available" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="true">Available</SelectItem>
                    <SelectItem value="false">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productStock"
            render={({ field }) => (
              <FormItem className="mt-5 w-[300px]">
                <FormLabel>Product Stock</FormLabel>
                <FormControl>
                  <Input placeholder="Product Stock" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-5 flex flex-col gap-5">
            <Button
              type="button"
              className="flex w-[140px] min-w-[140px] max-w-[250px] justify-start"
              onClick={() => setSizeInputColumn((prevState) => prevState + 1)}
            >
              <PlusCircle className="mr-2" /> Size
            </Button>

            {[...Array(sizeInputColumn).keys()].map((key) => (
              <div className="flex items-start gap-3" key={key}>
                <FormField
                  control={form.control}
                  name={`productSize.${key}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          key={field.name}
                          placeholder="Size"
                          className="w-[200px]"
                          value={field.value !== undefined? (field.value as string) : ""} //prettier-ignore
                          {...form.register(`productSize.${key}`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  size="icon"
                  type="button"
                  onClick={() =>
                    setSizeInputColumn((prevState) => prevState - 1)
                  }
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-5">
            <Button
              type="button"
              className="flex w-[140px] min-w-[140px] max-w-[250px] justify-start"
              onClick={() => setColorInputColumn((prevState) => prevState + 1)}
            >
              <PlusCircle className="mr-2" /> Color
            </Button>

            {[...Array(colorInputColumn).keys()].map((key) => (
              <div key={key} className="flex items-start gap-3">
                <FormField
                  control={form.control}
                  name={`productColor.${key}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          key={field.name}
                          placeholder="Color"
                          className="w-[200px]"
                          value={field.value !== undefined? (field.value as string) : ""} //prettier-ignore
                          {...form.register(`productColor.${key}`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  size="icon"
                  type="button"
                  onClick={() =>
                    setColorInputColumn((prevState) => prevState - 1)
                  }
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-5">
            <Button
              type="button"
              className="flex w-[140px] min-w-[140px] max-w-[250px] justify-start"
              onClick={() =>
                setDimensionInputColumn((prevState) => prevState + 1)
              }
            >
              <PlusCircle className="mr-2" /> Dimension
            </Button>

            {[...Array(dimensionInputColumn).keys()].map((key) => (
              <div key={key} className="flex items-start gap-3">
                <FormField
                  control={form.control}
                  name={`productDimension.${key}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          key={field.name}
                          placeholder="Dimension"
                          type="text"
                          className="w-[200px]"
                          value={field.value !== undefined? (field.value as string) : ""} //prettier-ignore
                          {...form.register(`productDimension.${key}`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  size="icon"
                  type="button"
                  onClick={() =>
                    setDimensionInputColumn((prevState) => prevState - 1)
                  }
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          <Button
            type="submit"
            className="mt-[50px] w-[400px]"
            disabled={form.formState.isSubmitting}
            aria-disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditProductForm;
