import dotenv from 'dotenv';
import jwt, {JwtPayload} from "jsonwebtoken";
import {H3Event} from "h3";
import {PermissionsEnum} from "~/server/services/userService";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

type UserObject = {
    user_id: number;
    role: string;
    permissions: Array<string>;
}
export function generateAuthToken(payload: UserObject): string {
    if (!secretKey){
        throw new Error('Secret key is not defined')
    }
    return jwt.sign(payload, secretKey, {expiresIn: '1h'})
}

export function verifyToken(token: string | null): JwtPayload | null {
    try {
        if (!token) {
            return null;
        }
        if (!secretKey) {
            return null;
        }
        return jwt.verify(token, secretKey) as JwtPayload;
    } catch (error) {
        console.error("Error verifying JWT:", error);
        return null;
    }
}

export function checkTokenPermissions(event: H3Event, permissions: Array<string>){
    if (!getHeader(event, 'Authorization')){
        return false
    }

    const payload = verifyToken(<string>getHeader(event, 'Authorization'))

    if (!payload || !payload.permissions || !payload.user_id || !payload.role){
        return false
    }

    if (payload.permissions.includes(PermissionsEnum.AllPermissions)){
        return true
    }

    for (const permission of permissions){
        if (!payload.permissions.includes(permission)){
            return false
        }
    }
    return true
}