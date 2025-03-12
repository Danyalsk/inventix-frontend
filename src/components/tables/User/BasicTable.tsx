// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../../ui/table";

import Badge from "../../ui/badge/Badge";

// import Badge from "../../ui/badge/Badge";

interface Order {
  profile: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };

  status: string;
  budget: string;
}

interface BasicTableProps {
  users: Order[];
  loading?: boolean;
}

export default function BasicTable({ users, loading }: BasicTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1000px]">
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead className="border-b border-gray-100 dark:border-white/[0.05]">
              <tr>
                {["User", "Email", "Phone", "Role", "Status"].map((header) => (
                  <th
                    key={header}
                    className="px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {loading
                ? Array.from({ length: 7 }).map((_, index) => (
                    <tr key={index}>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                          <div>
                            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
                            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mt-1" />
                          </div>
                        </div>
                      </td>
                      {[120, 100, 80, 60].map((width, i) => (
                        <td key={i} className="px-4 py-3">
                          <div
                            className={`h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded`}
                            style={{ width }}
                          />
                        </td>
                      ))}
                    </tr>
                  ))
                : users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          {user.profile && (
                            <img
                              className="w-10 h-10 rounded-full"
                              src={user.profile}
                              alt={`${user.first_name} ${user.last_name}`}
                            />
                          )}
                          <div>
                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                              {user.first_name} {user.last_name}
                            </span>
                            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                              {user.username}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        {user.email}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        {user.phone}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        {user.role}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        <Badge
                          size="sm"
                          color={
                            user.status === "active"
                              ? "success"
                              : user.status === "pending"
                              ? "warning"
                              : "error"
                          }
                        >
                          {user.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
