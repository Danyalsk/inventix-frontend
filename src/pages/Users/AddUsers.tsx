import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import UserForm from "../../components/form/UserForm";

export default function AddUsers() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add User" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[800px] text-center">
          {/* <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Create a user
          </h3> */}

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Please fill in the form below to create a new user. Ensure all
            required fields are completed accurately.
          </p>
        </div>
        <div className="mt-8">
          <UserForm />
        </div>
      </div>
    </div>
  );
}
