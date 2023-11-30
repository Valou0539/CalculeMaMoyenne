import {describe, expect, test} from "vitest";
import {ApiFetch} from "../vitest.config";

let token: string;
let academic_year_id: number;
let unit_id: number;
let semester_id: number;
let pole_average_id: number;
let subject_id: number;
let grade_group_id: number;
let grade_id: number;

describe("Connection of an admin user and creation, modification, and deletion of the grade structure", () => {
    test('login', async () => {
        const response : {token: string} = await ApiFetch('/user/login', {
            method: 'POST',
            body: JSON.stringify({
                pseudo: 'admin',
                password: 'adminpassword'
            }),
            async onResponse({ request, response, options }) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(200);
            }
        });
        expect(response.token).toBeDefined();
        token = response.token;
    });
    test('create an academic year', async () => {
        const response = await ApiFetch('academic_year/create', {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'First year'
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
            }
        });
        expect(response.id).toBeDefined();
        academic_year_id = response.id;
    });
    test('edit an academic year', async () => {
        await ApiFetch('academic_year/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: academic_year_id,
                name: 'First year edited'
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('create a semester', async () => {
        const response = await ApiFetch('semester/create', {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'First semester',
                idAcademicYear: academic_year_id
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
            }
        });
        expect(response.id).toBeDefined();
        semester_id = response.id;
    });
    test('edit a semester', async () => {
        await ApiFetch('semester/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: semester_id,
                name: 'First semester edited'
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('create a unit', async () => {
        const response = await ApiFetch('unit/create', {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'Unit 1',
                idSemester: semester_id
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
            }
        });
        expect(response.id).toBeDefined();
        unit_id = response.id;
    });
    test('edit a unit', async () => {
        await ApiFetch('unit/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: unit_id,
                name: 'Unit 1 edited'
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('create a pole average', async () => {
        const response = await ApiFetch('pole_average/create', {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'Pole 1',
                idUnit: unit_id,
                coefficient: 1
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
            }
        });
        expect(response.id).toBeDefined();
        pole_average_id = response.id;
    });
    test('edit a pole average', async () => {
        await ApiFetch('pole_average/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: pole_average_id,
                name: 'Pole 1 edited',
                coefficient: 2
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('create a subject', async () => {
        const response = await ApiFetch('subject/create', {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'Subject 1',
                idPoleAverage: pole_average_id,
                coefficient: 1
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
            }
        });
        expect(response.id).toBeDefined();
        subject_id = response.id;
    });
    test('edit a subject', async () => {
        await ApiFetch('subject/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: subject_id,
                name: 'Subject 1 edited',
                coefficient: 2
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('create a grade group', async () => {
       const response = await ApiFetch('grade_group/create', {
              method: 'POST',
              headers: {
                'Authorization': token
              },
              body: JSON.stringify({
                name: 'Grade group 1',
                idSubject: subject_id,
                coefficient: 1
              }),
              async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
              }
         });
       expect(response.id).toBeDefined();
       grade_group_id = response.id;
    });
    test('edit a grade group', async () => {
        await ApiFetch('grade_group/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: grade_group_id,
                name: 'Grade group 1 edited',
                coefficient: 2
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('create a grade', async () => {
        const response = await ApiFetch('grade/create', {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                idGradeGroup: grade_group_id,
                value: 10,
                coefficient: 1
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(201);
            }
        });
        expect(response.id).toBeDefined();
        grade_id = response.id;
    });
    test('edit a grade', async () => {
        await ApiFetch('grade/edit', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                id: grade_id,
                value: 20,
                coefficient: 2
            }),
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        })
    });
});

describe('Deletion of the grade structure', () => {
    test('login', async () => {
        const response : {token: string} = await ApiFetch('/user/login', {
            method: 'POST',
            body: JSON.stringify({
                pseudo: 'admin',
                password: 'adminpassword'
            }),
            async onResponse({ request, response, options }) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(200);
            }
        });
        expect(response.token).toBeDefined();
        token = response.token;
    });
    test('get all academics years', async () => {
        const response = await ApiFetch('academic_year/academic_years', {
            method: 'GET',
            headers: {
                'Authorization': token
            },
            async onResponse({request, response, options}) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(200);
            }
        });
        for (const academic_year of response) {
            await ApiFetch('academic_year/remove', {
                method: 'DELETE',
                headers: {
                    'Authorization': token
                },
                body: JSON.stringify({
                    id: academic_year.id
                }),
                async onResponse({request, response, options}) {
                    console.log(response.status);
                    console.log(response.statusText);
                    expect(response.status).toBe(204);
                }
            });
        }
    });
});