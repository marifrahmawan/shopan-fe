import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="w-full">
      <p className="w-full mb-5 text-[34px] font-semibold">
        My Products
      </p>

      <Link to={`create`}>
        <Button>
          <PlusCircle className="mr-2" /> Add Product
        </Button>
      </Link>
    </div>
  );
};

export default ProductsPage;
