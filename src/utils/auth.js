// src/utils/auth.js
export const employees = [
    { id: 1, username: 'john', password: 'john123', name: 'John Doe', role: 'Technician' },
    { id: 2, username: 'jane', password: 'jane123', name: 'Jane Smith', role: 'Manager' }
  ];
  
  export const authenticate = (username, password) => {
    return employees.find(emp => emp.username === username && emp.password === password);
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('employee') !== null;
  };
  
  export const getCurrentEmployee = () => {
    return JSON.parse(localStorage.getItem('employee'));
  };
  
  export const login = (employee) => {
    localStorage.setItem('employee', JSON.stringify(employee));
  };
  
  export const logout = () => {
    localStorage.removeItem('employee');
  };