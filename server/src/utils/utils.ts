import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
// dotenv.config();


export const generateToken: any = (user: Record<string, unknown>): unknown => {
    // const passPhrase = process.env.JWT_SECRETE as string;
    const passPhrase = 'jthkkkkkkksfjskfkdsjfdkjfffffstt';
    return jwt.sign(user, passPhrase, { expiresIn: '7d' })
}
