"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB(MONGODB_URI) {
    // console.log(typeof MONGODB_URI);
    mongoose_1.default
        .connect(MONGODB_URI)
        .then(() => {
        console.log("Connected to Database successfully!");
    })
        .catch((error) => {
        console.error("Error connecting to Database: ", error.message);
    });
}
