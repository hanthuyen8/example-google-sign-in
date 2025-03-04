import {describe, expect, test} from "vitest";

describe('Server', () => {
    test('login1', async () => {
        const path = 'http://localhost:8083/login';
        {
            const res = await fetch(path, {
                method: 'POST',
            });
            expect(res.status).toBe(400);
        }
        {
            const res = await fetch(path, {
                method: 'POST',
                body: JSON.stringify({
                    credential: '',
                    clientId: '',
                }),
            });
            expect(res.status).toBe(400);
        }
        {
            const res = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1ZjgyMTE3MTM3ODhiNjE0NTQ3NGI1MDI5YjAxNDFiZDViM2RlOWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2ODc1NDgyNTcxMjUyNzU1NjciLCJoZCI6InNlbnNwYXJrLmNvbSIsImVtYWlsIjoibmhhbm5oQHNlbnNwYXJrLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3NDA5OTQxMDUsIm5hbWUiOiJOaGFuIE5ndXllbiBIeSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLVFZyLVlZcDNUSk9SQ2tkUl9Jc09mTTIwM25Nc3hUQ1RXcDZweEFDX3ljSWE4XzVFYT1zOTYtYyIsImdpdmVuX25hbWUiOiJOaGFuIiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4gSHkiLCJpYXQiOjE3NDA5OTQ0MDUsImV4cCI6MTc0MDk5ODAwNSwianRpIjoiOWY2Mzg4MGQ5MDlhNDljZTIyZGFjNTMzNzQ3MDVhMDk3MjRmY2Q4NiJ9.prHP7t2EROVF9vOrYhnMocuRvK0iuiy2uRqgx1C75WvABQ6o6cK1C2mZc6ai-1lr3o1ZVIt8USEeHnCfnHpYH1VPNknz4l69VBL7zU--l0xsxW1zszgS-OvGx7Asoy3MWJmoH5PNHkiSM8k7IHSL0a_7eJ1VCuQsol-jJvu8OH2EE76ZUEk2GOBurcwKOLW0_ISyCcc-6EVyXZzjXvCmaveSeCLZPhd7XOmuZdHt-g8Vm1R4tsDIFbZL0K5DzrW25kYyo4J6YolrwibFYv9SF4szxHQRfDk-4t-PT7_8bE0IGiZlMGd9M9jzQgaG5BUGlnJ-0zwtZGTV79UAbd0KsA',
                    clientId: '524734525380-0acnda9q3tndmrro86q79kstjstmks6e.apps.googleusercontent.com',
                }),
            });
            expect(res.status).toBe(200);
        }
    });

    test('login2', async () => {
        const path = 'http://localhost:8083/login2';
        {
            const res = await fetch(path, {
                method: 'POST',
            });
            expect(res.status).toBe(400);
            console.log(await res.json());
        }
        {
            const res = await fetch(path, {
                method: 'POST',
                body: JSON.stringify({
                    credential: '',
                    clientId: '',
                }),
            });
            expect(res.status).toBe(400);
            console.log(await res.json());
        }
        {
            const res = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1ZjgyMTE3MTM3ODhiNjE0NTQ3NGI1MDI5YjAxNDFiZDViM2RlOWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2ODc1NDgyNTcxMjUyNzU1NjciLCJoZCI6InNlbnNwYXJrLmNvbSIsImVtYWlsIjoibmhhbm5oQHNlbnNwYXJrLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3NDA5OTQxMDUsIm5hbWUiOiJOaGFuIE5ndXllbiBIeSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLVFZyLVlZcDNUSk9SQ2tkUl9Jc09mTTIwM25Nc3hUQ1RXcDZweEFDX3ljSWE4XzVFYT1zOTYtYyIsImdpdmVuX25hbWUiOiJOaGFuIiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4gSHkiLCJpYXQiOjE3NDA5OTQ0MDUsImV4cCI6MTc0MDk5ODAwNSwianRpIjoiOWY2Mzg4MGQ5MDlhNDljZTIyZGFjNTMzNzQ3MDVhMDk3MjRmY2Q4NiJ9.prHP7t2EROVF9vOrYhnMocuRvK0iuiy2uRqgx1C75WvABQ6o6cK1C2mZc6ai-1lr3o1ZVIt8USEeHnCfnHpYH1VPNknz4l69VBL7zU--l0xsxW1zszgS-OvGx7Asoy3MWJmoH5PNHkiSM8k7IHSL0a_7eJ1VCuQsol-jJvu8OH2EE76ZUEk2GOBurcwKOLW0_ISyCcc-6EVyXZzjXvCmaveSeCLZPhd7XOmuZdHt-g8Vm1R4tsDIFbZL0K5DzrW25kYyo4J6YolrwibFYv9SF4szxHQRfDk-4t-PT7_8bE0IGiZlMGd9M9jzQgaG5BUGlnJ-0zwtZGTV79UAbd0KsA',
                    clientId: '524734525380-0acnda9q3tndmrro86q79kstjstmks6e.apps.googleusercontent.com',
                }),
            });
            expect(res.status).toBe(200);
            console.log(await res.json());
        }
    });

    test('get data from login2', async () => {
        const path = 'http://localhost:8083/login2';
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1ZjgyMTE3MTM3ODhiNjE0NTQ3NGI1MDI5YjAxNDFiZDViM2RlOWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2ODc1NDgyNTcxMjUyNzU1NjciLCJoZCI6InNlbnNwYXJrLmNvbSIsImVtYWlsIjoibmhhbm5oQHNlbnNwYXJrLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3NDEwNzQxMDAsIm5hbWUiOiJOaGFuIE5ndXllbiBIeSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLVFZyLVlZcDNUSk9SQ2tkUl9Jc09mTTIwM25Nc3hUQ1RXcDZweEFDX3ljSWE4XzVFYT1zOTYtYyIsImdpdmVuX25hbWUiOiJOaGFuIiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4gSHkiLCJpYXQiOjE3NDEwNzQ0MDAsImV4cCI6MTc0MTA3ODAwMCwianRpIjoiOTU1MjU5MTM5YzA1YTc4YmZlNDU3ZmY3MTM4NzU3MDViNzQ3NTIzNiJ9.lUnLaUHqmsXjGxi3HUXhmmPVXqv1iSTgn-eXPc5BxMVMaKDivNiZM2l7d30FzoE4XMJZ40dMkzkYl1Su5GZK9uKJQKrukSMRcGP7KNC6vaUBAVRfT_Ro1dk12nd97Krwd53C0uy7SGsoN_i10rHvr0oHzweqqeByaP3Yje8rjMilC2sxT3InMmiBGyFNKRe8t6FSsYz70DzPcgNy0iInyM0wH83UDYZspnm6sP21v3D59EvZKYJZ_b0cDp5Lb54qzUaK35n1WaZx_57LsKO3bcIK59eXYp-XbnE2meha83SkIVzosbOKgUGx-Bxj_aD8wTnPjc8XfkjV3AxHDknpYQ',
                clientId: '524734525380-0acnda9q3tndmrro86q79kstjstmks6e.apps.googleusercontent.com',
            }),
        });
        expect(res.status).toBe(200);
        console.log(await res.json());
        console.log(res.headers);
    });
});