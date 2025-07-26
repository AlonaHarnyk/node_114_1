import { User } from "../db/schemas/User.js";
import bcrypt from "bcrypt";

export const findUserByEmail = (email) => User.findOne({ email });

export const createUserInDb = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({ ...userData, password: hashedPassword });
  return user;
};
