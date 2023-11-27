import {PrismaClient} from '@prisma/client';
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.ReadAll, PermissionsEnum.ReadUsers])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    setResponseStatus(event, 200, 'Users fetched');
    return prisma.user.findMany({
        select: {
            pseudo: true,
            role: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            GradeGroup: false
        }
    });
});