import { Router } from "express";
import { UserController } from "./user.controller";


const router = Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.addUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

export const userRoute = router;