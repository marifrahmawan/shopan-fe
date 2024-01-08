import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Category = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <h2 className="text-[22px] font-semibold">List Category</h2>
        <Button size={"sm"}>
          <PlusCircle className="h-4 w-4 mr-2" /> Category
        </Button>
      </div>
    </div>
  );
};

export default Category;
