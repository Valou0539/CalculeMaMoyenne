import {describe, expect, test} from "vitest";
import {ApiFetch} from "../vitest.config";

let token: string;
describe("Inscription, connection, change pseudo and password of a lambda user utilisation", () => {
    test('register', async () => {
      const response : {token: string} = await ApiFetch('/user/register', {
          method: 'POST',
          body: JSON.stringify({
            pseudo: 'guigui',
            password: 'guiguipassword'
          }),
          async onResponse({ request, response, options }) {
              console.log(response.status);
              console.log(response.statusText);
              expect(response.status, response.statusText).toBe(201);
          }
      });
      expect(response.token).toBeDefined();
    });
    test('login', async () => {
      const response : {token: string} = await ApiFetch('/user/login', {
          method: 'POST',
          body: JSON.stringify({
            pseudo: 'guigui',
            password: 'guiguipassword'
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
    test('rename pseudo', async () => {
        await ApiFetch('/user/rename', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                pseudo: 'guigui2',
            }),
            async onResponse({ request, response, options }) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('change password', async () => {
      await ApiFetch('/user/password', {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: JSON.stringify({
                password: 'guiguipassword',
                new_password: 'guiguipassword2'
            }),
            async onResponse({ request, response, options }) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
    test('delete own self', async () => {
        await ApiFetch('/user/ownself', {
            method: 'DELETE',
            headers: {
                'Authorization': token
            },
            async onResponse({ request, response, options }) {
                console.log(response.status);
                console.log(response.statusText);
                expect(response.status).toBe(204);
            }
        });
    });
});