import {
  FaSearch,
  FaTrash,
  FaEye,
  FaEdit,
} from "react-icons/fa";

function Users() {
  const users = [
    {
      id: "#876364",
      name: "Arora Gaur",
      email: "arroragaur@gmail.com",
      package: "2 Weeks Package",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "#876365",
      name: "John Doe",
      email: "johndoe@gmail.com",
      package: "1 Month Package",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "#876366",
      name: "Dennis Smith",
      email: "dennis@gmail.com",
      package: "3 Months Package",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Users Management
          </h1>
          <p className="text-gray-500 text-sm">
            Manage registered users and subscriptions
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          + Add User
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1,254</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500 text-sm">Active Users</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">985</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500 text-sm">Inactive Users</h3>
          <p className="text-3xl font-bold mt-2 text-red-500">269</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500 text-sm">Subscriptions</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">780</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>

        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>All Packages</option>
          <option>2 Weeks</option>
          <option>1 Month</option>
          <option>3 Months</option>
        </select>

        <button className='bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 text-white cursor-pointer'>Search</button>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" />
                </th>

                <th className="px-6 py-4 text-left text-gray-500 text-sm">
                  Invoice ID
                </th>

                <th className="px-6 py-4 text-left text-gray-500 text-sm">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-gray-500 text-sm">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-gray-500 text-sm">
                  Package
                </th>

                <th className="px-6 py-4 text-left text-gray-500 text-sm">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-gray-500 text-sm">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {user.id}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />

                      <div>
                        <h3 className="font-medium text-gray-800">
                          {user.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Customer
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    {user.package}
                  </td>

                  <td className="px-6 py-4">
                    {user.status === "Active" && (
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                        Active
                      </span>
                    )}

                    {user.status === "Inactive" && (
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                        Inactive
                      </span>
                    )}

                    {user.status === "Pending" && (
                      <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                        Pending
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        <FaEye />
                      </button>

                      <button className="text-green-600 hover:text-green-800 cursor-pointer">
                        <FaEdit />
                      </button>

                      <button className="text-red-500 hover:text-red-700 cursor-pointer">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Users;