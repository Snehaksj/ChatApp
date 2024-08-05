"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("./routes/signup"));
const login_1 = __importDefault(require("./routes/login"));
const refreshToken_1 = __importDefault(require("./routes/refreshToken"));
const logout_1 = __importDefault(require("./routes/logout"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./lib/connect"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
const http_1 = __importDefault(require("http"));
const socket_1 = __importDefault(require("./services/socket"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const Socket_Service = new socket_1.default();
Socket_Service.io.attach(server);
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
(0, connect_1.default)(MONGODB_URI);
const FRONTEND_URL = process.env.FRONTEND_URL;
app.use((0, cors_1.default)({
    origin: FRONTEND_URL,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.set("Surrogate-Control", "no-store");
    next();
});
app.use("/signup", signup_1.default);
app.use("/login", login_1.default);
app.use("/logout", logout_1.default);
app.use("/refreshToken", refreshToken_1.default);
app.get("/protected", authMiddleware_1.default, (req, res) => {
    res.json({ message: "This is a protected route" });
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
Socket_Service.initListeners();
