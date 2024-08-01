"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../model/user"));
const userExists_1 = __importDefault(require("../middlewares/userExists"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const router = express_1.default.Router();
router.post("/", userExists_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    let usernameMsg = "";
    let emailMsg = "";
    let passwordMsg = "";
    if (!username) {
        usernameMsg = "Username required";
    }
    if (username && username.length < 2) {
        usernameMsg = "Username length must be greater than 2";
    }
    if (!email) {
        emailMsg = "Email is required";
    }
    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
        emailMsg = "Invalid Email";
    }
    if (!password) {
        passwordMsg = "Password required";
    }
    else if (password.length < 8) {
        passwordMsg = "Password must contain more than 8 characters";
    }
    if (usernameMsg || emailMsg || passwordMsg) {
        return res
            .status(400)
            .json({ error: { usernameMsg, emailMsg, passwordMsg } });
    }
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = new user_1.default({
            username,
            email,
            password: hashedPassword,
        });
        yield newUser.save();
        res.status(201).json({ message: "New user created!" });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
