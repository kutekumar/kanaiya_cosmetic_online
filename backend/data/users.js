import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@kumar.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@kumar.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane",
    email: "jane@kumar.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
