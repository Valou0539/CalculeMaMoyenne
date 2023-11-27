import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteUnits])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 422, 'Invalid body error {id}');
        return;
    }
    if (!await prisma.unit.findUnique({
        where: {
            id: body.id
        }
    })){
        setResponseStatus(event, 404, 'Unit not found');
        return;
    }
    const unit = await prisma.unit.delete({
        where: {
            id: body.id
        }
    });
    if (!unit){
        setResponseStatus(event, 503, 'An error occurred while deleting the unit');
        return;
    }
    setResponseStatus(event, 204, 'Unit deleted');
    return;
});