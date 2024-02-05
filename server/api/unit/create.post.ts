import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateUnits])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.name || !body.idSemester || body.coefficient === null) {
        setResponseStatus(event, 422, 'Invalid body error {name, idSemester, coefficient}');
        return;
    }
    const unit = await prisma.unit.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idSemester: body.idSemester
        }
    });
    if (!unit){
        setResponseStatus(event, 503, 'An error occurred while creating the unit');
        return;
    }
    setResponseStatus(event, 201, 'Unit created');
    return unit;
});