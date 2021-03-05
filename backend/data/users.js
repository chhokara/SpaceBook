import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Adam Driver",
    email: "adam@example.com",
    password: bcryptjs.hashSync("1234567", 10),
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcryptjs.hashSync("1234567", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcryptjs.hashSync("1234567", 10),
  },
];

export default users;
