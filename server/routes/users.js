import express from "express";
import { register } from "../controller/auth.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controller/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

export default router;
