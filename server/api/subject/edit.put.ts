import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateSubjects])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && body.coefficient === undefined && !body.id_pole_average)){
        setResponseStatus(event, 422, 'Invalid body error {id, name?, coefficient?, id_pole_average?}');
        return;
    }
    const updateData: { name?: string, coefficient?: integer, idPoleAverage?: integer } = {};

    if (body.name) {
        updateData.name = body.name;
    }
    if (body.coefficient) {
        updateData.coefficient = body.coefficient;
    }
    if (body.id_pole_average) {
        updateData.idPoleAverage = body.id_pole_average;
    }

    const subject = await prisma.subject.update({
        where: {
            id: body.id
        },
        data: updateData
    });
    if (!subject){
        setResponseStatus(event, 503, 'An error occurred while updating the subject');
        return;
    }
    setResponseStatus(event, 204, 'Subject updated');
    return;
});