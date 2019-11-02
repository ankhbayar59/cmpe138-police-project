import { generateSet } from "../util";

export const createEmployee = (firstName, lastName, dob, type,
    username, password, phone) =>
  `INSERT INTO employee(fname, lname, dob, type, username, password, phone) \
  VALUES ('${firstName}', '${lastName}', '${dob}', '${type}', '${username}', \
  '${password}', '${phone}')`;

export const readEmployee = (eid) =>
  `SELECT * FROM employee WHERE e_id = ${eid}`;

export const selectEmployeeByUsername = (username) =>
  `SELECT * FROM employee WHERE username = '${username}' LIMIT 1`;

export const updateEmployee = (eid, columns, values) =>
  `UPDATE employee SET ${generateSet(columns, values)} WHERE e_id = ${eid}`;

export const deleteEmployee = (eid) => `DELETE FROM employee WHERE e_id = ${eid}`;

