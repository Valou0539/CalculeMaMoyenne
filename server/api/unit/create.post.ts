import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateUnits])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.name || !body.id_semester) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const unit = await prisma.unit.create({
        data: {
            name: body.name,
            idSemester: body.id_semester
        }
    });
    if (!unit){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Unit created'};
});