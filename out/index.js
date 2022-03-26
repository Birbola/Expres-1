"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create instence
const app = (0, express_1.default)();
app.get('/olimjon', (require, response) => {
    response.sendFile('olimtoy.html', { root: "./pages" });
});
app.get('/javohir', (require, response) => {
    response.sendFile('javohirjon.html', { root: "./pages" });
});
app.get('/note', (require, response) => {
    response.sendFile('note140.html', { root: "./pages" });
});
app.listen(8080, () => {
    console.log('Server ishga tushdi . http://localhost:8080');
});
