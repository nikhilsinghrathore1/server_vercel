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
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.set('trust proxy', true);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ip = req.ip || "unknown";
    try {
        yield prisma.acces.create({
            data: {
                addres: ip
            },
        });
        res.send('IP address stored');
    }
    catch (error) {
        console.error('Error storing IP address:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/access', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ip = req.ip || 'unknown'; // Ensure ip is always a string
    try {
        // Find the user with the given IP address
        const user = yield prisma.acces.findFirst({
            where: {
                addres: ip,
            },
        });
        if (user) {
            res.json({
                msg: "user found",
                acces: "granted"
            });
        }
        else {
            res.json({
                msg: `No user with IP ${ip} found.`,
                acces: "denied"
            });
        }
    }
    catch (error) {
        console.error('Error finding user with IP address:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.listen(3000);
