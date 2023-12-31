import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreatePoleAverages])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.name || body.coefficient === undefined || !body.idUnit) {
        setResponseStatus(event, 422, 'Invalid body error (name, coefficient, idUnit)');
        return;
    }
    const poleAverage = await prisma.poleAverage.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idUnit: body.idUnit
        }
    });
    if (!poleAverage){
        setResponseStatus(event, 503, 'An error occurred while creating the pole average');
        return;
    }
    setResponseStatus(event, 201, 'Pole average created');
    return poleAverage;
});