import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Input from "../../components/form/input/InputField";
import TextArea from "../../components/form/input/TextArea";
import Label from "../../components/form/Label";
import Select from "../../components/form/Select";
// import UserForm from "../../components/form/UserForm";
import Button from "../../components/ui/button/Button";
import { ProductData } from "../../types/users";
import AddProduct from "../../components/tables/AddProductTable";

export default function AddUsers() {
  const [formData, setFormData] = useState<ProductData>({
    barcode: "",
    name: "",
    nickname: "",
    description: "",
    supplier: "",
    purchase_price: "",
    selling_price: "",
  });

  const options = [
    { value: "Dmart", label: "Dmart" },
    { value: "Babu Bhai", label: "Babu Bhai" },
    { value: "Tata", label: "Tata" },
  ];

  interface Order {
    id: number;
    name: string;
    nickname: string;
    purchase_price: number;
    selling_price: number;
    stock: number;
    barcode: string;
    supplier: string;
  }

  const [tableData, setTableData] = useState<Order[]>([]);

  const handleAddToTable = () => {
    const newId =
      tableData.length > 0
        ? Math.max(...tableData.map((item) => item.id)) + 1
        : 1;

    const newOrder: Order = {
      id: newId,
      barcode: formData.barcode,
      name: formData.name,
      nickname: formData.nickname,
      supplier: formData.supplier,
      stock: 1,
      purchase_price: parseFloat(formData.purchase_price),
      selling_price: parseFloat(formData.selling_price),
    };
    setTableData([...tableData, newOrder]);
    setFormData({
      barcode: "",
      name: "",
      nickname: "",
      description: "",
      supplier: "",
      purchase_price: "",
      selling_price: "",
    });
  };

  const handleSubmitToInventory = async () => {
    if (tableData.length === 0) {
      alert("No products to add to inventory.");
      return;
    }

    try {
      // Simulate API call
      console.log("Submitting to inventory:", tableData);

      // In real implementation, you would make an API call here:
      // await fetch('/api/inventory', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(tableData)
      // });

      // Clear table after successful submission
      setTableData([]);

      // Show success message
      alert("Products successfully added to inventory!");
    } catch (error) {
      console.error("Error submitting to inventory:", error);
      alert("Failed to add products to inventory. Please try again.");
    }
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Add User" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[800px] text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Please fill in the form below to create a new user. Ensure all
            required fields are completed accurately.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-6">
            <div className="block xl:flex xl:space-x-4">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="firstName">Barcode</Label>
                    <Input
                      type="text"
                      id="firstName"
                      value={formData.barcode}
                      onChange={(e) =>
                        setFormData({ ...formData, barcode: e.target.value })
                      }
                      className="w-80"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="bg-success-500 text-white shadow-theme-xs hover:bg-success-600 focus:outline-none font-medium rounded-lg text-sm px-2 text-center me-2 mt-6 h-9 w-20"
                    >
                      Scan
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full xl:flex-1">
                <Label htmlFor="lastName">Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="block xl:flex xl:space-x-4">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label htmlFor="username">Nickname</Label>
                <Input
                  type="text"
                  id="username"
                  onChange={(e) => {
                    setFormData({ ...formData, nickname: e.target.value });
                  }}
                  value={formData.nickname}
                />
              </div>
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label>Supplier</Label>
                <Select
                  options={options}
                  placeholder="Select an option"
                  onChange={(value) => {
                    setFormData({ ...formData, supplier: value });
                  }}
                  className="dark:bg-dark-900"
                />
              </div>
            </div>
            <div className="block xl:flex xl:space-x-4">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label htmlFor="username">Purchase price</Label>
                <Input
                  type="text"
                  id="username"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      purchase_price: e.target.value,
                    });
                  }}
                  value={formData.purchase_price}
                />
              </div>
              <div className="w-full xl:flex-1">
                <Label htmlFor="password">Selling price</Label>
                <Input
                  type="text"
                  id="password"
                  onChange={(e) => {
                    setFormData({ ...formData, selling_price: e.target.value });
                  }}
                  value={formData.selling_price}
                />
              </div>
            </div>

            <div>
              <Label>Description</Label>
              <TextArea
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
                rows={6}
              />
            </div>

            <div className="flex justify-end ">
              <button
                type="button"
                className=" bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 focus:outline-none font-medium rounded-lg text-sm px-2 text-center me-2 mb-2  h-10.5 w-27 "
                onClick={handleAddToTable}
              >
                Add Item
              </button>
            </div>
            {tableData.length > 0 && (
              <div>
                <div>
                  <AddProduct tableData={tableData} />
                </div>
                <div className="flex justify-end gap-5  mt-8">
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={handleSubmitToInventory}
                  >
                    Add Products
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      x
    </div>
  );
}
