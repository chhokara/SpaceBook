import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Adam Driver",
    email: "adam@example.com",
    password: bcryptjs.hashSync("1234567", 10),
    image: "/images/adam.jpeg",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcryptjs.hashSync("1234567", 10),
    image: "/images/john.jpeg",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcryptjs.hashSync("1234567", 10),
    image: "/images/jane.jpeg",
  },
];

export default users;
