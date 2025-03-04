import {describe, test} from "vitest";
import {JwtService} from "../src/services/JwtService";

describe('JwtService', () => {
    test('sign', async () => {
        const data = {
            id: 1,
            hello: 'world',
            okay: {
                a: 1,
                b: 2
            }
        };
        const secret = '123';
        const jwt = await JwtService.sign(secret, data, 120);
        console.log(jwt);

        const payload = await JwtService.verify(secret, jwt);
        console.log(payload);
    });

    test('verify', async () => {
        const secret = '123';
        const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaGVsbG8iOiJ3b3JsZCIsIm9rYXkiOnsiYSI6MSwiYiI6Mn0sImlhdCI6MTc0MTA3MTY0NCwiZXhwIjoxNzQxMDcxNzY0fQ.XTw-I6-XKxOdewixjreJitJTixE7Elis8UTCA0M5Zcg';
        const payload = await JwtService.verify(secret, jwt);
        console.log(payload);
    })
});