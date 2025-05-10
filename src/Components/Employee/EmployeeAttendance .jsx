import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EmployeeAttendanceDashboard = () => {
  const [currentDate] = useState(new Date());
  const [joiningDate] = useState(new Date(2023, 5, 15)); // June 15, 2023
  const [attendanceData, setAttendanceData] = useState({});

  // Generate sample attendance data
  useEffect(() => {
    const generateData = () => {
      const data = {};
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        data[day] =
          date.getDay() === 0
            ? "holiday"
            : Math.random() < 0.2
            ? "absent"
            : "present";
      }
      setAttendanceData(data);
    };
    generateData();
  }, [currentDate]);

  // Calculate total working days since joining
  const calculateWorkingDays = (fromDate, toDate) => {
    let count = 0;
    for (let d = new Date(fromDate); d <= toDate; d.setDate(d.getDate() + 1)) {
      if (d.getDay() !== 0) count++; // Exclude Sundays
    }
    return count;
  };

  const totalWorkingDays = calculateWorkingDays(joiningDate, new Date());
  const currentMonthDays = calculateWorkingDays(
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  );
  const presentDays = Object.values(attendanceData).filter(
    (v) => v === "present"
  ).length;
  const absentDays = Object.values(attendanceData).filter(
    (v) => v === "absent"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Container - Attendance Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <h2 className="text-xl font-bold">Attendance Summary</h2>
          </div>

          <div className="p-6 space-y-6">
            <StatCard
              title="Joining Date"
              value={joiningDate.toLocaleDateString()}
              icon="📅"
              color="from-purple-100 to-purple-50"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatCard
                title="Total Working Days"
                value={totalWorkingDays}
                icon="🛠️"
                color="from-blue-100 to-blue-50"
              />
              <StatCard
                title="Current Month Days"
                value={currentMonthDays}
                icon="📆"
                color="from-green-100 to-green-50"
              />
              <StatCard
                title="Present Days"
                value={presentDays}
                icon="✅"
                color="from-teal-100 to-teal-50"
              />
              <StatCard
                title="Absent Days"
                value={absentDays}
                icon="❌"
                color="from-red-100 to-red-50"
              />
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Sundays are automatically marked as holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Container - Calendar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
            <h2 className="text-xl font-bold">Attendance Calendar</h2>
            <p className="text-indigo-100">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 gap-1 mb-3">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div
                  key={i}
                  className="h-8 w-8 flex items-center justify-center text-sm font-medium text-gray-500 mx-auto"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({
                length: new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  1
                ).getDay(),
              }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8 w-8"></div>
              ))}

              {Array.from({
                length: new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  0
                ).getDate(),
              }).map((_, i) => {
                const day = i + 1;
                const date = new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                );
                const today = new Date();
                const isToday =
                  date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear();
                const isSunday = date.getDay() === 0;
                const status = attendanceData[day] || "pending";

                return (
                  <motion.div
                    key={day}
                    whileHover={{ scale: 1.1 }}
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium mx-auto relative
              ${
                isSunday
                  ? "bg-blue-100 text-blue-600"
                  : status === "present"
                  ? "bg-green-100 text-green-600"
                  : status === "absent"
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-100 text-gray-600"
              }
              ${isToday ? "ring-2 ring-indigo-500" : ""}`}
                    title={`${day} ${currentDate.toLocaleString("default", {
                      month: "long",
                    })}: ${
                      isSunday
                        ? "Holiday"
                        : status === "present"
                        ? "Present"
                        : status === "absent"
                        ? "Absent"
                        : "Pending"
                    }`}
                  >
                    {day}
                    {isToday && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 h-2 w-2 bg-indigo-500 rounded-full"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-gray-600">Present</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-xs text-gray-600">Absent</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs text-gray-600">Holiday</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-xs text-gray-600">Today</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className={`bg-gradient-to-r ${color} p-4 rounded-lg shadow-sm border border-gray-100`}
  >
    <div className="flex items-center">
      <span className="text-2xl mr-3">{icon}</span>
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default EmployeeAttendanceDashboard;
