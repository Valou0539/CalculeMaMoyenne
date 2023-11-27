import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateSubjects])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.name || !body.id_pole_average || !body.coefficient) {
        setResponseStatus(event, 422, 'Invalid body error {name, id_pole_average, coefficient}');
        return;
    }
    const subject = await prisma.subject.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idPoleAverage: body.id_pole_average
        }
    });
    if (!subject){
        setResponseStatus(event, 503, 'An error occurred while creating the subject');
        return;
    }
    setResponseStatus(event, 201, 'Subject created');
    return;
});