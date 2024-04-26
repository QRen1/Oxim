"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MyUserController_1 = __importDefault(require("../controllers/MyUserController"));
const auth_1 = require("../middleware/auth");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
router.get("/", auth_1.jwtCheck, auth_1.jwtParse, MyUserController_1.default.getCurrentUser);
router.post("/", auth_1.jwtCheck, MyUserController_1.default.createCurrentUser);
router.put("/", auth_1.jwtCheck, //if user is logged in
auth_1.jwtParse, // get user info
validation_1.validateMyUserRequest, //validate the req body
MyUserController_1.default.updateCurrentUser // run the logic to update user
);
exports.default = router;
