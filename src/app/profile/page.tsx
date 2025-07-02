import Link from "next/link";

export default function ProfilePage() {
  const user = {
    name: "John Smith",
  };

  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: ["Fresh Bananas", "Whole Milk", "Sourdough Bread"],
      total: "$10.71",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      items: ["Avocados", "Greek Yogurt"],
      total: "$7.48",
      status: "Delivered",
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      items: ["Fresh Spinach", "Whole Milk", "Avocados"],
      total: "$8.27",
      status: "Delivered",
    },
    {
      id: "ORD-004",
      date: "2024-01-01",
      items: ["Sourdough Bread", "Greek Yogurt", "Fresh Bananas"],
      total: "$12.97",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="p-1 hover:bg-green-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">FreshMart Customer</p>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Order History
        </h3>

        <div className="space-y-4">
          {orderHistory.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{order.total}</p>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Items:</p>
                <p className="text-sm text-gray-800">
                  {order.items.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
