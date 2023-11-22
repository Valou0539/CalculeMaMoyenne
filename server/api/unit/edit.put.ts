import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateUnits])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && !body.id_semester)){
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const updateData: { name?: string, idSemester?: integer } = {};

    if (body.name) {
        updateData.name = body.name;
    }
    if (body.id_semester) {
        updateData.idSemester = body.id_semester;
    }

    const unit = await prisma.unit.update({
        where: {
            id: body.id
        },
        data: updateData
    });
    if (!unit){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Unit updated'};
});