import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdatePoleAverages])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && !body.id_unit && !body.coefficient)){
        setResponseStatus(event, 422, 'Invalid body error {id, name?, id_unit?, coefficient?}');
        return;
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
        setResponseStatus(event, 503, 'An error occurred while updating the pole average');
        return;
    }
    setResponseStatus(event, 200, 'Pole average updated');
    return;
});