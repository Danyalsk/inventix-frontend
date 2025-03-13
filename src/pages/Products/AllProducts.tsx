import PageBreadcrumb from "../../components/common/PageBreadCrumb";

import ProductsTable from "../../components/tables/ProductTable";

export default function Products() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Products" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[720px] text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            View all products available in our inventory. You can browse through
            the list to find the items you need. Use the search bar to quickly
            locate specific products or apply filters to narrow down your
            options.
          </p>
        </div>
        <div className="mt-10">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
}
