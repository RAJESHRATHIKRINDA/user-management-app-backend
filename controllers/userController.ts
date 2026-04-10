import User from "../models/User";

// CREATE
export const createUser = async (req: any, res: any) => {
  const user = await User.create(req.body);
  res.json(user);
};

// READ
export const getUsers = async (req: any, res: any) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE
export const updateUser = async (req: any, res: any) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
};

// DELETE
export const deleteUser = async (req: any, res: any) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};