
function RecentOrders() {
  const orders = [
    {
      id: '#ORD-7732',
      date: 'Oct 12, 2023',
      total: '$120.50',
      status: 'Delivered',
      statusColor:
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      id: '#ORD-8291',
      date: 'Oct 08, 2023',
      total: '$342.10',
      status: 'Shipped',
      statusColor:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      id: '#ORD-9012',
      date: 'Oct 05, 2023',
      total: '$45.00',
      status: 'Pending',
      statusColor:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    },
  ]

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Recent Orders
        </h2>
        <a
          className="text-blue-500 text-sm font-semibold hover:underline"
          href="#"
        >
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-700/50">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Order ID
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Date
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Total
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">
                  {order.total}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-500 hover:text-blue-600 font-semibold text-sm">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-slate-50 dark:bg-slate-700/20 text-center">
        <button className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">
          Load More Orders
        </button>
      </div>
    </div>
  )
}

export default RecentOrders
