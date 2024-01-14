import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, PlusCircle, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import AddEditCategoryForm from "./Module/AddEditCategoryForm";
import { ICategory, getCategory } from "@/utils/api/category";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import DeleteCategoryDialog from "./Module/DeleteCategoryDialog";

const Category = () => {
  const [categoryData, setCategoryData] = useState<ICategory[] | undefined>([]);

  const fetchCategory = async () => {
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

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="w-full">
      <p className="mb-5 w-full text-[22px] font-semibold">Category List</p>

      <div className="flex w-full gap-2 rounded-lg border p-2">
        <AddEditCategoryForm setCategoryData={setCategoryData}>
          <Button className="h-[30px] w-fit">
            <PlusCircle className="mr-2 h-4 w-4" /> Create
          </Button>
        </AddEditCategoryForm>
      </div>

      <div className="mt-2 w-full rounded-lg border p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No. </TableHead>
              <TableHead>Name </TableHead>
              <TableHead>Actions </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoryData?.map((data, index) => (
              <TableRow key={data._id}>
                <TableCell className="w-[30px]">{index + 1}.</TableCell>
                <TableCell>{data.categoryName}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <AddEditCategoryForm
                      setCategoryData={setCategoryData}
                      mode="edit"
                      categoryData={data}
                    >
                      <PencilIcon className="h-5 w-5 stroke-secondary-green hover:cursor-pointer hover:stroke-green-600" />
                    </AddEditCategoryForm>
                    <DeleteCategoryDialog
                      categoryId={data._id}
                      categoryName={data.categoryName}
                      setCategoryData={setCategoryData}
                    >
                      <Trash2Icon className="h-5 w-5 stroke-secondary-red hover:cursor-pointer hover:stroke-red-600" />
                    </DeleteCategoryDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Category;
