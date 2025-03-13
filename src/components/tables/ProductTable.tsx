import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Order {
  id: number;
  name: string;
  nickname: string;
  category: string;
  stock: number;
  purchase_price: string;
  selling_price: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    name: "Iphone XX",
    nickname: "ixx",
    category: "Electronics",
    stock: 10,
    purchase_price: "140000",
    selling_price: "150000",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    nickname: "sgs21",
    category: "Electronics",
    stock: 15,
    purchase_price: "120000",
    selling_price: "130000",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    nickname: "sonywh",
    category: "Accessories",
    stock: 20,
    purchase_price: "30000",
    selling_price: "35000",
  },
  {
    id: 4,
    name: "MacBook Pro",
    nickname: "mbp",
    category: "Computers",
    stock: 5,
    purchase_price: "200000",
    selling_price: "220000",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    nickname: "dxps13",
    category: "Computers",
    stock: 8,
    purchase_price: "180000",
    selling_price: "190000",
  },
];

export default function Products() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1000px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  nickname
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Category
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-center  text-theme-xs dark:text-gray-400"
                >
                  Stock
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  purchase_price
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  selling_price
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 ">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-medium text-gray-800  text-theme-sm dark:text-white/90">
                          {order.name}
                        </span>
                        <span className="block text-gray-500   text-theme-xs dark:text-gray-400">
                          {order.nickname}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center  text-theme-sm dark:text-gray-400">
                    {order.nickname}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">{order.category}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3  text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.stock}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.purchase_price} ₹
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-50  text-center  text-theme-sm dark:text-gray-400">
                    {order.selling_price}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-50  text-center  text-theme-sm dark:text-gray-400">
                    <button
                      type="button"
                      className=" bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 focus:outline-none font-medium rounded-lg text-sm px-2 text-center me-2 mb-2  h-8 w-16"
                    >
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
