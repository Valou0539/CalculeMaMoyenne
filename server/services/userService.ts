enum RolesEnum {
    User = 'user',
    Admin = 'admin'
}

export enum PermissionsEnum {
    ReadOwnSelf = 'read:own_self',
    ReadUsers = 'read:users',
    UpdateOwnSelf = 'update:own_self',
    UpdateUsers = 'update:users',
    DeleteOwnSelf = 'delete:own_self',
    DeleteUsers = 'delete:users',
    ReadAcademicYears = 'read:academic_years',
    UpdateAcademicYears = 'update:academic_years',
    DeleteAcademicYears = 'delete:academic_years',
    CreateAcademicYears = 'create:academic_years',
    ReadSemesters = 'read:semesters',
    UpdateSemesters = 'update:semesters',
    DeleteSemesters = 'delete:semesters',
    CreateSemesters = 'create:semesters',
    ReadUnits = 'read:units',
    UpdateUnits = 'update:units',
    DeleteUnits = 'delete:units',
    CreateUnits = 'create:units',
    ReadPoleAverages = 'read:pole_averages',
    UpdatePoleAverages = 'update:pole_averages',
    DeletePoleAverages = 'delete:pole_averages',
    CreatePoleAverages = 'create:pole_averages',
    ReadSubjects = 'read:subjects',
    UpdateSubjects = 'update:subjects',
    DeleteSubjects = 'delete:subjects',
    CreateSubjects = 'create:subjects',
    ReadOwnSelfGrades = 'read:own_self_grades',
    UpdateOwnSelfGrades = 'update:own_self_grades',
    DeleteOwnSelfGrades = 'delete:own_self_grades',
    CreateOwnSelfGrades = 'create:own_self_grades',
    GradesAll = 'grades:*',
    ReadAll = 'read:*',
    AllPermissions = '*'
}

interface Role {
    name: string;
    permissions: string [];
}

export const Roles: { [key in RolesEnum]: Role } = {
    [RolesEnum.User]: { name: RolesEnum.User, permissions: [
            PermissionsEnum.ReadOwnSelf,
            PermissionsEnum.UpdateOwnSelf,
            PermissionsEnum.DeleteOwnSelf,
            PermissionsEnum.ReadOwnSelfGrades,
            PermissionsEnum.UpdateOwnSelfGrades,
            PermissionsEnum.DeleteOwnSelfGrades
        ]},
    [RolesEnum.Admin]: { name: RolesEnum.Admin, permissions: [
            PermissionsEnum.AllPermissions
        ]}
}
export function findRoleByName(roleName: string): Role | null {
    const roleNames = Object.keys(Roles) as RolesEnum[];

    for (const name of roleNames) {
        if (Roles[name].name === roleName) {
            return Roles[name];
        }
    }

    return null;
}
