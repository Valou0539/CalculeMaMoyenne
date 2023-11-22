import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdatePoleAverages])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && !body.id_unit && !body.coefficient)){
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const updateData: { name?: string, coefficient?: integer, idUnit?: integer } = {};

    if (body.name) {
        updateData.name = body.name;
    }

    if (body.coefficient) {
        updateData.coefficient = body.coefficient;
    }

    if (body.id_unit) {
        updateData.idUnit = body.id_unit;
    }
    const poleAverage = await prisma.poleAverage.update({
        where: {
            id: body.id
        },
        data: updateData
    });
    if (!poleAverage){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Pole average updated'};
});