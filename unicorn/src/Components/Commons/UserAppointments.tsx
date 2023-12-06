const UserAppointments = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Booking Date
            </th>
            <th scope="col" className="px-6 py-3">
              Booking Time
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <span className=" p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500 ">
                confirmed
              </span>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4 w-8 h-6 justify-between items-center flex my-4 ">
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <span className="p-2 bg-red-600 rounded-md text-white font-semibold  dark:text-blue-500">
                Rejected
              </span>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Pending
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              January 04, 2023
            </th>
            <td className="px-6 py-4">!0 AM - 3 AM</td>
            <td className="px-6 py-4">$100</td>
            <td className="px-6 py-4">
              {" "}
              <h1 className="font-extrabold cursor-pointer">okoro </h1>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 bg-green-600 rounded-md text-white font-semibold  dark:text-blue-500"
              >
                Confirmed
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserAppointments;