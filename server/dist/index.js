"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("./routes/signup"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./lib/connect"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
(0, connect_1.default)(MONGODB_URI);
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Ensure this line is before your routes
app.use("/signup", signup_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
