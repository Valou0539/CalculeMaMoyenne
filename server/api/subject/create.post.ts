import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateSubjects])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.name || !body.id_pole_average || !body.coefficient) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const subject = await prisma.subject.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idPoleAverage: body.id_pole_average
        }
    });
    if (!subject){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Subject created'};
});