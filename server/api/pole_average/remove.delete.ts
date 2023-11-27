import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeletePoleAverages])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 422, 'Invalid body error {id}');
        return;
    }
    if (!await prisma.poleAverage.findUnique({
        where: {
            id: body.id
        }
    })){
        setResponseStatus(event, 404, 'Pole average not found');
        return;
    }
    const poleAverage = await prisma.poleAverage.delete({
        where: {
            id: body.id
        }
    });
    if (!poleAverage){
        setResponseStatus(event, 503, 'An error occurred while deleting the pole average');
        return;
    }
    setResponseStatus(event, 200, 'Pole average deleted');
    return;
});