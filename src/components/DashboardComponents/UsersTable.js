import React from "react";
import { toast } from "react-toastify";
import { Toast } from "../../utils/toastUtil";
import toastifyOptions from "../../utils/toastifyOptions";

const UserTable = ({ users, fetchUsers }) => {
  const token = localStorage.getItem("token");

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://backenddatc11.azurewebsites.net/api/dashboard/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.msg, toastifyOptions);
      }

      toast.success("User successfully deleted");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <Toast />
        <div className="shadow-md rounded-lg">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-blue-600 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Points
                </th>
                <th scope="col" className="px-5 py-3 bg-blue-600"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.nume}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.email}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{user.role}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{user.points}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => {
                        deleteUser(user._id);
                        fetchUsers();
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
