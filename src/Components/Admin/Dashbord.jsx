import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { 
  FiUsers, FiDollarSign, FiCalendar, FiTrendingUp, 
  FiTool, FiUserCheck, FiUserX, FiClock, FiAward 
} from 'react-icons/fi';
import { FaTools, FaUserCog } from 'react-icons/fa';
import { FaElevator } from "react-icons/fa6";

Chart.register(...registerables);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data - replace with API calls to Tally Prime
  const yearlyTurnoverData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Yearly Turnover (₹)',
      data: [1200000, 900000, 1500000, 1100000, 1300000, 1700000, 1900000, 1600000, 1400000, 1800000, 2100000, 2300000],
      backgroundColor: 'rgba(99, 102, 241, 0.7)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 2,
      borderRadius: 4
    }]
  };

  const monthlySalesPurchaseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales (₹)',
        data: [450000, 320000, 510000, 420000, 480000, 620000, 710000, 590000, 530000, 680000, 790000, 850000],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Purchases (₹)',
        data: [280000, 210000, 320000, 250000, 290000, 380000, 420000, 350000, 310000, 400000, 450000, 490000],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const amcData = {
    labels: ['Completed', 'Pending', 'Overdue'],
    datasets: [{
      data: [65, 20, 15],
      backgroundColor: [
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(239, 68, 68, 0.7)'
      ],
      borderWidth: 1,
      cutout: '70%'
    }]
  };

  const employees = [
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      role: 'Senior Technician', 
      salary: 42000, 
      joiningDate: '15/06/2020', 
      workingDays: 245, 
      present: 220, 
      absent: 25,
      leavesTaken: 5,
      overtimeHours: 32,
      performance: 4.5,
      avatar: '/avatars/rahul.jpg',
      skills: ['Elevator Repair', 'Maintenance', 'Troubleshooting']
    },
    { 
      id: 2, 
      name: 'Priya Patel', 
      role: 'Sales Executive', 
      salary: 35000, 
      joiningDate: '22/03/2021', 
      workingDays: 210, 
      present: 195, 
      absent: 15,
      leavesTaken: 3,
      overtimeHours: 12,
      performance: 4.2,
      avatar: '/avatars/priya.jpg',
      skills: ['Client Relations', 'Sales', 'Negotiation']
    },
    { 
      id: 3, 
      name: 'Amit Singh', 
      role: 'Service Engineer', 
      salary: 48000, 
      joiningDate: '05/01/2019', 
      workingDays: 280, 
      present: 265, 
      absent: 15,
      leavesTaken: 8,
      overtimeHours: 45,
      performance: 4.8,
      avatar: '/avatars/amit.jpg',
      skills: ['Installation', 'Modernization', 'Safety Checks']
    },
    { 
      id: 4, 
      name: 'Neha Gupta', 
      role: 'Accountant', 
      salary: 38000, 
      joiningDate: '18/09/2020', 
      workingDays: 230, 
      present: 225, 
      absent: 5,
      leavesTaken: 2,
      overtimeHours: 18,
      performance: 4.3,
      avatar: '/avatars/neha.jpg',
      skills: ['Bookkeeping', 'Taxation', 'Financial Reporting']
    },
    { 
      id: 5, 
      name: 'Vikram Joshi', 
      role: 'AMC Coordinator', 
      salary: 45000, 
      joiningDate: '30/11/2021', 
      workingDays: 190, 
      present: 180, 
      absent: 10,
      leavesTaken: 4,
      overtimeHours: 22,
      performance: 4.1,
      avatar: '/avatars/vikram.jpg',
      skills: ['Contract Management', 'Scheduling', 'Customer Service']
    }
  ];

  // Calculate attendance statistics
  const attendanceStats = {
    totalEmployees: employees.length,
    totalPresent: employees.reduce((sum, emp) => sum + emp.present, 0),
    totalAbsent: employees.reduce((sum, emp) => sum + emp.absent, 0),
    avgAttendance: (employees.reduce((sum, emp) => sum + (emp.present / emp.workingDays), 0) / employees.length) * 100
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                <FaElevator className="h-8 w-8 text-indigo-400 mr-3" />
              </motion.div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-400">
                Hi-Lift Admin Pro
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {['overview', 'finance', 'amc', 'employees'].map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all ${
                      activeTab === tab 
                        ? 'bg-indigo-600 shadow-md text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {tab === 'overview' && <FiTrendingUp className="h-4 w-4" />}
                    {tab === 'finance' && <FiDollarSign className="h-4 w-4" />}
                    {tab === 'amc' && <FaTools className="h-4 w-4" />}
                    {tab === 'employees' && <FaUserCog className="h-4 w-4" />}
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={<FiDollarSign className="h-6 w-6" />}
                title="Yearly Turnover"
                value="₹3.0 Cr"
                change="+12%"
                isPositive={true}
                color="from-indigo-100 to-indigo-50 text-indigo-600"
              />
              <StatCard 
                icon={<FiTrendingUp className="h-6 w-6" />}
                title="Monthly Sales"
                value="₹8.5 L"
                change="+8%"
                isPositive={true}
                color="from-green-100 to-green-50 text-green-600"
              />
              <StatCard 
                icon={<FiTool className="h-6 w-6" />}
                title="Active AMCs"
                value="142"
                change="+15"
                isPositive={true}
                color="from-blue-100 to-blue-50 text-blue-600"
              />
              <StatCard 
                icon={<FiUsers className="h-6 w-6" />}
                title="Total Employees"
                value="28"
                change="+3"
                isPositive={true}
                color="from-purple-100 to-purple-50 text-purple-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FiDollarSign className="mr-2 text-indigo-500" />
                  Yearly Turnover
                </h3>
                <div className="h-80">
                  <Bar 
                    data={yearlyTurnoverData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                          },
                          ticks: {
                            callback: function(value) {
                              return '₹' + (value / 100000).toFixed(1) + 'L';
                            }
                          }
                        },
                        x: {
                          grid: {
                            display: false
                          }
                        }
                      },
                      plugins: {
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return '₹' + context.raw.toLocaleString('en-IN');
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FiTrendingUp className="mr-2 text-green-500" />
                  Monthly Sales vs Purchases
                </h3>
                <div className="h-80">
                  <Line 
                    data={monthlySalesPurchaseData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      interaction: {
                        mode: 'index',
                        intersect: false
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                          },
                          ticks: {
                            callback: function(value) {
                              return '₹' + (value / 1000).toFixed(0) + 'K';
                            }
                          }
                        },
                        x: {
                          grid: {
                            display: false
                          }
                        }
                      },
                      plugins: {
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return context.dataset.label + ': ₹' + context.raw.toLocaleString('en-IN');
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Attendance Summary */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <FiUserCheck className="mr-2 text-blue-500" />
                Employee Attendance Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600">Total Present</p>
                      <p className="text-3xl font-bold text-blue-800">{attendanceStats.totalPresent}</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <FiUserCheck className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-blue-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${(attendanceStats.totalPresent / (attendanceStats.totalPresent + attendanceStats.totalAbsent)) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-600">Total Absent</p>
                      <p className="text-3xl font-bold text-red-800">{attendanceStats.totalAbsent}</p>
                    </div>
                    <div className="p-3 bg-red-100 rounded-full">
                      <FiUserX className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-red-200 rounded-full">
                    <div 
                      className="h-2 bg-red-600 rounded-full" 
                      style={{ width: `${(attendanceStats.totalAbsent / (attendanceStats.totalPresent + attendanceStats.totalAbsent)) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600">Avg. Attendance</p>
                      <p className="text-3xl font-bold text-green-800">{attendanceStats.avgAttendance.toFixed(1)}%</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <FiAward className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-green-200 rounded-full">
                    <div 
                      className="h-2 bg-green-600 rounded-full" 
                      style={{ width: `${attendanceStats.avgAttendance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
                  <FaUserCog className="inline mr-2 text-indigo-500" />
                  Employee Management
                </h3>
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center"
                  >
                    <FiUsers className="mr-2" />
                    Add Employee
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center"
                  >
                    <FiCalendar className="mr-2" />
                    Attendance Report
                  </motion.button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((employee) => {
                      const attendancePercent = (employee.present / employee.workingDays) * 100;
                      const absentPercent = (employee.absent / employee.workingDays) * 100;
                      
                      return (
                        <motion.tr 
                          key={employee.id}
                          whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                          className="transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img 
                                  className="h-10 w-10 rounded-full object-cover" 
                                  src={employee.avatar} 
                                  alt={employee.name} 
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                                <div className="text-sm text-gray-500">ID: {employee.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{employee.role}</div>
                            <div className="text-xs text-gray-500">
                              {employee.skills.slice(0, 2).join(', ')}...
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {employee.joiningDate}
                            <div className="text-xs text-gray-400 mt-1">
                              {Math.floor((new Date() - new Date(employee.joiningDate.split('/').reverse().join('-'))) / (1000 * 60 * 60 * 24 * 365)).toFixed(1)} years
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ₹{employee.salary.toLocaleString('en-IN')}
                            <div className="text-xs text-gray-400 mt-1">
                              {employee.overtimeHours} OT hours
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-24 mr-2">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                  <span>{Math.round(attendancePercent)}%</span>
                                  <span>{employee.absent} absent</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${attendancePercent}%` }}
                                  ></div>
                                  <div 
                                    className="bg-red-500 h-2 rounded-full -mt-2" 
                                    style={{ width: `${absentPercent}%`, marginLeft: `${attendancePercent}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="mr-2 text-sm font-medium">
                                {employee.performance}/5
                              </div>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-yellow-500 h-2 rounded-full" 
                                  style={{ width: `${employee.performance * 20}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                              View
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              Edit
                            </button>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Employee Performance Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FiAward className="mr-2 text-yellow-500" />
                  Top Performers
                </h3>
                <div className="space-y-4">
                  {[...employees]
                    .sort((a, b) => b.performance - a.performance)
                    .slice(0, 3)
                    .map((emp) => (
                      <div key={emp.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                        <img 
                          src={emp.avatar} 
                          alt={emp.name} 
                          className="h-12 w-12 rounded-full object-cover border-2 border-yellow-400"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium text-gray-900">{emp.name}</h4>
                            <span className="text-sm font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                              {emp.performance}/5
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{emp.role}</p>
                          <div className="mt-1 flex items-center text-xs text-gray-400">
                            <FiClock className="mr-1" />
                            <span>{emp.overtimeHours} OT hours this month</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FiUserX className="mr-2 text-red-500" />
                  Attendance Alerts
                </h3>
                <div className="space-y-4">
                  {[...employees]
                    .sort((a, b) => (b.absent / b.workingDays) - (a.absent / a.workingDays))
                    .slice(0, 3)
                    .map((emp) => {
                      const absentPercent = (emp.absent / emp.workingDays) * 100;
                      return (
                        <div key={emp.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                          <img 
                            src={emp.avatar} 
                            alt={emp.name} 
                            className="h-12 w-12 rounded-full object-cover border-2 border-red-400"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-gray-900">{emp.name}</h4>
                              <span className="text-sm font-semibold bg-red-100 text-red-800 px-2 py-1 rounded">
                                {emp.absent} absences
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">{emp.role}</p>
                            <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-red-500 h-2 rounded-full" 
                                style={{ width: `${absentPercent}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

const StatCard = ({ icon, title, value, change, isPositive, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-gradient-to-r ${color.split(' ')[0]} ${color.split(' ')[1]} p-6 rounded-xl shadow-md border border-gray-200`}
  >
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color.split(' ')[1].replace('text', 'bg')} bg-opacity-20 mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change} {isPositive ? '↑' : '↓'} from last period
        </p>
      </div>
    </div>
  </motion.div>
);

export default AdminDashboard;