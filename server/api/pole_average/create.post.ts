import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreatePoleAverages])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.name || !body.coefficient || !body.id_unit) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const poleAverage = await prisma.poleAverage.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idUnit: body.id_unit
        }
    });
    if (!poleAverage){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Pole average created'};
});