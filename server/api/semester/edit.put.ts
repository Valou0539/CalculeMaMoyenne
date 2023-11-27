import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateSemesters])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && !body.id_academic_year)){
        setResponseStatus(event, 422, 'Invalid body error {id, name?, id_academic_year?}');
        return;
    }
    const updateData: { name?: string, idAcademicYear?: integer } = {};

    if (body.name) {
        updateData.name = body.name;
    }

    if (body.id_academic_year) {
        updateData.idAcademicYear = body.id_academic_year;
    }

    const semester = await prisma.semester.update({
        where: {
            id: body.id
        },
        data: updateData
    });
    if (!semester){
        setResponseStatus(event, 503, 'An error occurred while updating the semester');
        return;
    }
    setResponseStatus(event, 204, 'Semester updated');
    return;
});