import React from "react";
import { motion } from "framer-motion";

const OurNetwork = () => {
  const cities = [
    { name: "Delhi NCR", technicians: 85, serviceCenters: 3 },
    { name: "Mumbai", technicians: 72, serviceCenters: 4 },
    { name: "Bangalore", technicians: 68, serviceCenters: 3 },
    { name: "Hyderabad", technicians: 45, serviceCenters: 2 },
    { name: "Chennai", technicians: 52, serviceCenters: 2 },
    { name: "Kolkata", technicians: 38, serviceCenters: 2 },
    { name: "Pune", technicians: 35, serviceCenters: 1 },
    { name: "Ahmedabad", technicians: 28, serviceCenters: 1 },
    { name: "Jaipur", technicians: 22, serviceCenters: 1 },
    { name: "Lucknow", technicians: 18, serviceCenters: 1 },
    { name: "Kochi", technicians: 15, serviceCenters: 1 },
    { name: "Chandigarh", technicians: 12, serviceCenters: 1 },
  ];

  const stateCoverage = [
    { state: "Maharashtra", coverage: "100%" },
    { state: "Delhi", coverage: "100%" },
    { state: "Karnataka", coverage: "95%" },
    { state: "Tamil Nadu", coverage: "90%" },
    { state: "Uttar Pradesh", coverage: "85%" },
    { state: "West Bengal", coverage: "85%" },
    { state: "Gujarat", coverage: "80%" },
    { state: "Rajasthan", coverage: "75%" },
    { state: "Telangana", coverage: "90%" },
    { state: "Kerala", coverage: "80%" },
    { state: "Punjab", coverage: "75%" },
    { state: "Haryana", coverage: "85%" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Nationwide Network
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Serving across India with the largest team of certified lift
            technicians
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Cities Covered
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      25+
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Service Centers
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      20+
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Certified Technicians
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      500+
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Avg. Response Time
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      2.5 hrs
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coverage Map Visualization */}
        <div className="mb-16">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Our Coverage Across India
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                States with our service coverage percentage
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="relative h-96 w-full bg-gray-100 rounded-md overflow-hidden">
                {/* This would be replaced with an actual SVG map in production */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Simplified India map representation */}
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-800">
                        90%
                      </span>
                    </div>
                    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-green-800">
                        100%
                      </span>
                    </div>
                    <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-yellow-100 border-2 border-yellow-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-yellow-800">
                        85%
                      </span>
                    </div>
                    <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-red-100 border-2 border-red-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-red-800">
                        75%
                      </span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-100 border-2 border-purple-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">
                        95%
                      </span>
                    </div>
                    <div className="text-center absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-400 text-lg font-medium">
                        India Map Visualization (Interactive in production)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">
                    90-100% Coverage
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">80-89% Coverage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">70-79% Coverage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Below 70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* City Coverage Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-16">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Major Cities Coverage
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Our technician strength and service centers in key cities
            </p>
          </div>
          <div className="px-4 py-5 sm:p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Technicians
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Service Centers
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Response Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cities.map((city, index) => (
                    <motion.tr
                      key={city.name}
                      whileHover={{
                        backgroundColor: "rgba(243, 244, 246, 0.5)",
                      }}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {city.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="w-2/4 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{
                                width: `${(city.technicians / 85) * 100}%`,
                              }}
                            ></div>
                          </div>
                          {city.technicians}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {city.serviceCenters}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {city.technicians > 50
                          ? "<2 hours"
                          : city.technicians > 30
                          ? "<4 hours"
                          : "<6 hours"}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* State Coverage */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              State-wise Coverage
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Our service availability across Indian states
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stateCoverage.map((state) => (
                <motion.div
                  key={state.state}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-900">
                      {state.state}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        state.coverage === "100%"
                          ? "bg-green-100 text-green-800"
                          : state.coverage >= "90%"
                          ? "bg-blue-100 text-blue-800"
                          : state.coverage >= "80%"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {state.coverage}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          state.coverage === "100%"
                            ? "bg-green-500"
                            : state.coverage >= "90%"
                            ? "bg-blue-500"
                            : state.coverage >= "80%"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: state.coverage }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
