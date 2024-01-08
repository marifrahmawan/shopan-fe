/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Pencil,
  PlusCircle,
  Trash2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { IProduct, getProducts } from "@/utils/api/products";
import { Badge } from "@/components/ui/badge";
import { RpConvertion } from "@/utils/utils";

const ProductsPage = () => {
  const { toast } = useToast();

  const [products, setProducts] = useState<IProduct[] | undefined>([]); //prettier-ignore

  const fetchNewArrivalProducts = useCallback(async () => {
    try {
      const res = await getProducts();

      setProducts(res?.data);
    } catch (error: any) {
      toast({
        description: <p className="capitalize">{error.message}</p>,
      });
    }
  }, []);

  useEffect(() => {
    fetchNewArrivalProducts();
  }, []);

  return (
    <div className="w-full">
      <p className="mb-5 w-full text-[22px] font-semibold">My Products</p>

      <div className="flex w-full gap-2 rounded-lg border p-2">
        <Link to={`create`}>
          <Button className="h-[30px] w-fit">
            <PlusCircle className="mr-2 h-4 w-4" /> Create
          </Button>
        </Link>
      </div>

      <div className="mt-2 w-full rounded-lg border p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No. </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Dimension</TableHead>
              <TableHead className="text-center">Total Sold</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product, index) => (
              <TableRow key={product._id}>
                <TableCell className="w-[30px] text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-[230px] min-w-[230px] font-medium">
                  {product.productName}
                </TableCell>

                <TableCell className="w-[120px] min-w-[120px]">
                  {product.productBrand}
                </TableCell>

                <TableCell
                  className={`w-[40px] text-center font-semibold ${
                    product.productStock < 5
                      ? "text-secondary-red"
                      : "text-secondary-green"
                  }`}
                >
                  {product.productStock}
                </TableCell>

                <TableCell className="w-[120px] min-w-[120px]">
                  {product.productSize.length > 0 ? (
                    <div className="grid w-[80px] grid-cols-3 gap-2">
                      {product.productSize.map((size) => (
                        <p key={size}>{size}</p>
                      ))}
                    </div>
                  ) : (
                    <p>-</p>
                  )}
                </TableCell>

                <TableCell className="w-[150px] max-w-[200px]">
                  {product.productColor.length > 0 ? (
                    <div className="flex w-full flex-wrap gap-2">
                      {product.productColor.map((color) => (
                        <Badge key={color}>{color}</Badge>
                      ))}
                    </div>
                  ) : (
                    <p>-</p>
                  )}
                </TableCell>

                <TableCell className="w-[150px] max-w-[200px]">
                  {product.productDimension.length > 0 ? (
                    <div className="flex w-full flex-wrap gap-2">
                      {product.productDimension.map((dimension) => (
                        <Badge key={dimension}>{dimension}</Badge>
                      ))}
                    </div>
                  ) : (
                    <p>-</p>
                  )}
                </TableCell>

                <TableCell className="w-[80px] text-center">
                  {product.productSold}
                </TableCell>
                <TableCell className="w-[80px] text-center">
                  {RpConvertion(product.productPrice)}
                </TableCell>
                <TableCell className="h-full">
                  <div className="flex gap-2">
                    <Link to={`edit/${product._id}`} state={product}>
                      <Pencil className="h-5 w-5 stroke-secondary-green hover:cursor-pointer hover:stroke-green-600" />
                    </Link>
                    <Trash2Icon className="h-5 w-5 stroke-secondary-red hover:cursor-pointer hover:stroke-red-600" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex w-full items-end justify-end gap-3">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select>
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent side="top" className="min-w-fit">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Pagination className="mx-0 mt-5 w-fit">
            <PaginationContent>
              <PaginationItem>
                <Button className="h-8 w-8 rounded-full bg-transparent p-0">
                  <ChevronLeftIcon className="h-4 w-4 dark:stroke-white" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <ul>
                  <PaginationLink href="#">1</PaginationLink>
                </ul>
              </PaginationItem>
              <PaginationItem>
                <ul>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </ul>
              </PaginationItem>
              <PaginationItem>
                <ul>
                  <PaginationLink href="#">3</PaginationLink>
                </ul>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <Button className="h-8 w-8 rounded-full bg-transparent p-0">
                  <ChevronRightIcon className="h-4 w-4 dark:stroke-white" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
