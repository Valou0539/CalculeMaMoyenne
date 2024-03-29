import { PrismaClient } from '@prisma/client'
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelfGrades])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const payload = verifyToken(<string>getHeader(event, 'Authorization'));
    if (!payload){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    });
    if (!user){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if ((body.bonus === null && body.malus === null) || !body.id_semester) {
        setResponseStatus(event, 422, 'Invalid body error {bonus?, malus?, id_semester}');
        return;
    }
    const updateData: { bonus?: number, malus?: number } = {};

    if (body.bonus !== null) {
        updateData.bonus = body.bonus;
    }
    if (body.malus !== null) {
        updateData.malus = body.malus;
    }

    console.log(updateData)

    const userSemester = await prisma.userSemester.findMany({
        where: {
            idUser: user.id,
            idSemester: body.id_semester
        }
    })

    if (!userSemester.length){
        const userSemesterCreated = await prisma.userSemester.create({
            data: {
                idUser: user.id,
                idSemester: body.id_semester,
                bonus: body.bonus ?? 0,
                malus: body.malus ?? 0
            }
        })
        if (!userSemesterCreated){
            setResponseStatus(event, 503, 'An error occurred while creating the user semester');
            return;
        }
        setResponseStatus(event, 201, 'User semester created');
        return;
    }

    const userSemesterUpdated = await prisma.userSemester.updateMany({
        where: {
            idUser: user.id,
            idSemester: body.id_semester
        },
        data: updateData
    })
    if (!userSemesterUpdated){
        setResponseStatus(event, 503, 'An error occurred while updating the user semester');
        return;
    }
    setResponseStatus(event, 204, 'Semester updated')
    return
})