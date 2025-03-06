import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function Users() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[800px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Users
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base mb-10">
            Here you can manage all the users of your application. You can add,
            edit, or delete users as needed.
          </p>
        </div>
        <div>
          <BasicTableOne />
        </div>
      </div>
    </div>
  );
}
