import {describe, test} from "vitest";
import {LoginController} from "../src/controllers/LoginController";
import {loggerWrapper1, loggerWrapper2} from "../src/handlers/Utils";

describe("LoginController", () => {
    test("googleSignIn", async () => {
        loggerWrapper1(async (l) => {
            const credential = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1ZjgyMTE3MTM3ODhiNjE0NTQ3NGI1MDI5YjAxNDFiZDViM2RlOWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2ODc1NDgyNTcxMjUyNzU1NjciLCJoZCI6InNlbnNwYXJrLmNvbSIsImVtYWlsIjoibmhhbm5oQHNlbnNwYXJrLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3NDA5OTQxMDUsIm5hbWUiOiJOaGFuIE5ndXllbiBIeSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLVFZyLVlZcDNUSk9SQ2tkUl9Jc09mTTIwM25Nc3hUQ1RXcDZweEFDX3ljSWE4XzVFYT1zOTYtYyIsImdpdmVuX25hbWUiOiJOaGFuIiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4gSHkiLCJpYXQiOjE3NDA5OTQ0MDUsImV4cCI6MTc0MDk5ODAwNSwianRpIjoiOWY2Mzg4MGQ5MDlhNDljZTIyZGFjNTMzNzQ3MDVhMDk3MjRmY2Q4NiJ9.prHP7t2EROVF9vOrYhnMocuRvK0iuiy2uRqgx1C75WvABQ6o6cK1C2mZc6ai-1lr3o1ZVIt8USEeHnCfnHpYH1VPNknz4l69VBL7zU--l0xsxW1zszgS-OvGx7Asoy3MWJmoH5PNHkiSM8k7IHSL0a_7eJ1VCuQsol-jJvu8OH2EE76ZUEk2GOBurcwKOLW0_ISyCcc-6EVyXZzjXvCmaveSeCLZPhd7XOmuZdHt-g8Vm1R4tsDIFbZL0K5DzrW25kYyo4J6YolrwibFYv9SF4szxHQRfDk-4t-PT7_8bE0IGiZlMGd9M9jzQgaG5BUGlnJ-0zwtZGTV79UAbd0KsA";
            const clientId = '524734525380-0acnda9q3tndmrro86q79kstjstmks6e.apps.googleusercontent.com';
            const clientIds = new Set<string>();
            const deps = {logger: l, clientIds: clientIds};
            const account = await LoginController.googleSignIn(deps, credential, clientId);
            console.log(account);
        }, console.error, {isGke: false, prefix: ''});
    });

    test("googleSignIn2", async () => {
        loggerWrapper2(async (logger) => {
            const credential = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1ZjgyMTE3MTM3ODhiNjE0NTQ3NGI1MDI5YjAxNDFiZDViM2RlOWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MjQ3MzQ1MjUzODAtMGFjbmRhOXEzdG5kbXJybzg2cTc5a3N0anN0bWtzNmUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2ODc1NDgyNTcxMjUyNzU1NjciLCJoZCI6InNlbnNwYXJrLmNvbSIsImVtYWlsIjoibmhhbm5oQHNlbnNwYXJrLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3NDA5OTQxMDUsIm5hbWUiOiJOaGFuIE5ndXllbiBIeSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLVFZyLVlZcDNUSk9SQ2tkUl9Jc09mTTIwM25Nc3hUQ1RXcDZweEFDX3ljSWE4XzVFYT1zOTYtYyIsImdpdmVuX25hbWUiOiJOaGFuIiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4gSHkiLCJpYXQiOjE3NDA5OTQ0MDUsImV4cCI6MTc0MDk5ODAwNSwianRpIjoiOWY2Mzg4MGQ5MDlhNDljZTIyZGFjNTMzNzQ3MDVhMDk3MjRmY2Q4NiJ9.prHP7t2EROVF9vOrYhnMocuRvK0iuiy2uRqgx1C75WvABQ6o6cK1C2mZc6ai-1lr3o1ZVIt8USEeHnCfnHpYH1VPNknz4l69VBL7zU--l0xsxW1zszgS-OvGx7Asoy3MWJmoH5PNHkiSM8k7IHSL0a_7eJ1VCuQsol-jJvu8OH2EE76ZUEk2GOBurcwKOLW0_ISyCcc-6EVyXZzjXvCmaveSeCLZPhd7XOmuZdHt-g8Vm1R4tsDIFbZL0K5DzrW25kYyo4J6YolrwibFYv9SF4szxHQRfDk-4t-PT7_8bE0IGiZlMGd9M9jzQgaG5BUGlnJ-0zwtZGTV79UAbd0KsA";
            const clientId = '524734525380-0acnda9q3tndmrro86q79kstjstmks6e.apps.googleusercontent.com';
            const clientIds = new Set<string>();
            const deps = {logger: logger, clientIds: clientIds};
            const account = await LoginController.googleSignIn(deps, credential, clientId);
            console.log(account);
        }, 'TEST')(null, null).then();
    });
});