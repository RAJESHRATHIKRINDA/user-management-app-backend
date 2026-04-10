"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
// CREATE
const createUser = async (req, res) => {
    const user = await User_1.default.create(req.body);
    res.json(user);
};
exports.createUser = createUser;
// READ
const getUsers = async (req, res) => {
    const users = await User_1.default.find();
    res.json(users);
};
exports.getUsers = getUsers;
// UPDATE
const updateUser = async (req, res) => {
    const user = await User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
};
exports.updateUser = updateUser;
// DELETE
const deleteUser = async (req, res) => {
    await User_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map