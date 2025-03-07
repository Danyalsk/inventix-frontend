import ComponentCard from "../common/ComponentCard";
import Label from "./Label";
import Input from "./input/InputField";
import { EnvelopeIcon } from "../../icons";
import PhoneInput from "./group-input/PhoneInput";
import Select from "./Select";
import TextArea from "./input/TextArea";
import { useState } from "react";
import Button from "../ui/button/Button";

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
];

export default function UserForm() {
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };
  const [message, setMessage] = useState("");

  return (
    <ComponentCard title="Create a user">
      <div className="space-y-6">
        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" />
          </div>
          <div className="flex-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" />
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" />
          </div>
          <div className="flex-1">
            <Label htmlFor="password">Password</Label>
            <Input type="text" id="password" />
          </div>
        </div>

        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <Label>Email</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <EnvelopeIcon className="size-6" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <Label>Phone</Label>
            <PhoneInput
              selectPosition="start"
              countries={countries}
              placeholder="+1 (555) 000-0000"
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
        <div className="flex w-full space-x-2">
          <div className="flex-1">
            <Label>Status</Label>
            <Select
              options={options}
              placeholder="Select an option"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
          </div>
          <div className="flex-1">
            <Label>Role</Label>
            <Select
              options={role}
              placeholder="Select an option"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
          </div>
        </div>
        <div>
          <Label>Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>
        <div className="flex justify-end gap-5">
          <Button size="sm" variant="primary">
            Add User
          </Button>
        </div>
      </div>
    </ComponentCard>
  );
}
