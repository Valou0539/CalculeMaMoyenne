import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateAcademicYears])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.name) {
        setResponseStatus(event, 422, 'Invalid body error {name}');
        return;
    }
    const academic_year = await prisma.academicYear.create({
        data: {
            name: body.name
        }
    });
    if (!academic_year){
        setResponseStatus(event, 503, 'An error occurred while creating the academic year');
        return;
    }
    setResponseStatus(event, 201, 'Academic year created');
    return;
});