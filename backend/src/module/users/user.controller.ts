import type { Request, Response } from "express";
import { UserService } from "./user.service";
import { sendResponse } from "../../utility/SendResponse";
import bcrypt from "bcryptjs";

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.getuserFromDb();
        if (!users || users.length === 0) {
            sendResponse(res, false, 404, "No users found");
        } else {
            sendResponse(res, true, 200, "Users fetched successfully", users);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching users", error.message);
    }
};

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserService.getuserByIdFromDb(Number(id));
        if (!user) {
            sendResponse(res, false, 404, "User not found");
        } else {
            sendResponse(res, true, 200, "User fetched successfully", user);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching user", error.message);
    }
};

const addUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.adduserToDb(req.body);
        const password = await bcrypt.hash(user.password, 15);
        user.password = password;
        if (!user) {
            sendResponse(res, false, 400, "Failed to add user");
        } else {
            sendResponse(res, true, 201, "User added successfully", user);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding user", error.message);
    }
};

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserService.updateuserInDb(Number(id), req.body);
        if (!user) {
            sendResponse(res, false, 404, "User not found");
        } else {
            sendResponse(res, true, 200, "User updated successfully", user);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating user", error.message);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserService.deleteuserFromDb(Number(id));
        if (!user) {
            sendResponse(res, false, 404, "User not found");
        } else {
            sendResponse(res, true, 200, "User deleted successfully", user);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting user", error.message);
    }
};

export const UserController = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};