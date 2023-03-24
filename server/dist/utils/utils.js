"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const generateToken = (user) => {
    const passPhrase = 'jthkkkkkkksfjskfkdsjfdkjfffffstt';
    return jwt.sign(user, passPhrase, { expiresIn: '7d' });
};
exports.generateToken = generateToken;
//# sourceMappingURL=utils.js.map