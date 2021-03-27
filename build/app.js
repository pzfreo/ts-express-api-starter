"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./generated/routes");
exports.app = express_1.default();
// Use body parser to read sent json payloads
exports.app.use(body_parser_1.default.json());
routes_1.RegisterRoutes(exports.app);
const port = process.env.PORT || 8000;
exports.app.listen(port, () => console.log(`Phone app listening at http://localhost:${port}`));
