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
const user_1 = __importDefault(require("../model/user"));
const userExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    try {
        const user = yield user_1.default.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ error: { emailMsg: "User already exists" } });
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = userExists;
