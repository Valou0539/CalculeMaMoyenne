import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateUnits])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && !body.id_semester)){
        setResponseStatus(event, 422, 'Invalid body error {id, name?, id_semester?}');
        return;
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
        setResponseStatus(event, 503, 'An error occurred while updating the unit');
        return;
    }
    setResponseStatus(event, 200, 'Unit updated');
    return;
});