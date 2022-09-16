let employee = [
  {
    id: 1,
    name: "Carlos",
    age: 35,
    designation: "UX Engineer",
    salary: 68000,
    phone: 1234567,
  },
  {
    id: 2,
    name: "Tom",
    age: 38,
    designation: "developer",
    salary: 30000,
    phone: 1234555,
  },
  {
    id: 3,
    name: "Matthew",
    age: 39,
    designation: "accountant",
    salary: 41000,
    phone: 7654321,
  },
  {
    id: 4,
    name: "Rambo",
    age: 58,
    designation: "developer",
    salary: 98000,
    phone: 6654321,
  },
  {
    id: 5,
    name: "Neo",
    age: 22,
    designation: "developer",
    salary: 95000,
    phone: 2234567,
  },
  {
    id: 6,
    name: "Limo",
    age: 18,
    designation: "accountant",
    salary: 35000,
    phone: 8877665,
  },
  {
    id: 7,
    name: "Jess",
    age: 56,
    designation: "Clerk",
    salary: 30000,
    phone: 9087654,
  },
];
let developers = employee.filter((item) => item.designation == "developer");
console.log("All Developer ", developers);

let youth = employee.filter((item) => item.age < 30);
console.log("Young Employees ", youth);

let high_salary = employee.filter((item) => {
  return item.age < 30 && item.salary > 70000;
});
console.log("High Salary Banding Employees under age 30 ", high_salary);

let accountant = employee.filter(
  (item) => item.salary < 40000 && item.designation == "accountant"
);
console.log("Accountants ", accountant);

let id5 = employee.find((item) => item.id == 5);
console.log("Details of id5 ", id5);

let jess = employee.filter((item) => item.name == "Jess");
console.log("Details of Jess ", jess);
