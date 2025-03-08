import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PhoneInput from "../../components/form/group-input/PhoneInput";
import Input from "../../components/form/input/InputField";
import TextArea from "../../components/form/input/TextArea";
import Label from "../../components/form/Label";
import Select from "../../components/form/Select";
// import UserForm from "../../components/form/UserForm";
import Button from "../../components/ui/button/Button";
import { EnvelopeIcon } from "../../icons";
import axios from "axios";
const countries = [
  { code: "IND", label: "+91" },
  { code: "US", label: "+1" },
];

const options = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
];

const role = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Employee",
    label: "Employee",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function AddUsers() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    status: "",
    role: "",
    description: "",
  });
  const handleClick = async () => {
    try {
      const response = await axios.post(
        "https://inventix-backend.onrender.com/v1/create-user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
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
        <div className="mt-8">
          <div className="space-y-6">
            <div className="block xl:flex xl:space-x-4">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                />
              </div>
              <div className="w-full xl:flex-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  onChange={(e) => {
                    setFormData({ ...formData, last_name: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="block xl:flex xl:space-x-4">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  value={formData.username}
                />
              </div>
              <div className="w-full xl:flex-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="text"
                  id="password"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  value={formData.password}
                />
              </div>
            </div>

            <div className="block xl:flex xl:space-x-4">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label>Email</Label>
                <div className="relative">
                  <Input
                    placeholder="info@gmail.com"
                    type="text"
                    className="pl-[62px]"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    value={formData.email}
                  />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                    <EnvelopeIcon className="size-6" />
                  </span>
                </div>
              </div>
              <div className="w-full xl:flex-1">
                <Label>Phone</Label>
                <PhoneInput
                  selectPosition="start"
                  countries={countries}
                  placeholder="+1 (555) 000-0000"
                  onChange={(number) => {
                    setFormData({ ...formData, phone: number });
                  }}
                />
              </div>
            </div>
            <div className="block xl:flex xl:space-x-2">
              <div className="w-full xl:flex-1 mb-4 xl:mb-0">
                <Label>Status</Label>
                <Select
                  options={options}
                  placeholder="Select an option"
                  onChange={(value) => {
                    setFormData({ ...formData, status: value });
                  }}
                  className="dark:bg-dark-900"
                />
              </div>
              <div className="w-full xl:flex-1">
                <Label>Role</Label>
                <Select
                  options={role}
                  placeholder="Select an option"
                  onChange={(value) => {
                    setFormData({ ...formData, role: value });
                  }}
                  className="dark:bg-dark-900"
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
            <div className="flex justify-end gap-5">
              <Button size="sm" variant="primary" onClick={handleClick}>
                Add User
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
