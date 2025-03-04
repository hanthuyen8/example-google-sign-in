import {ICompactLogger} from "../services/Logger";
import {OAuth2Client} from 'google-auth-library';
import {verifyBoolean, verifyNumber, verifyString} from "./Utils";
import {ResponseError} from "../configs/Errors";

export const LoginController = {
    googleSignIn: async (deps: GoogleSignInDeps, credential: string, clientId: string): Promise<Account> => {
        if (!deps.clientIds.has(clientId)) {
            throw new ResponseError(`Your information does not correct`, `${clientId} is not a valid client id.`);
        }
        deps.logger.append(`cred=${credential}`);
        const client = new OAuth2Client();
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: clientId,
        });
        const payload = ticket.getPayload();
        if (!payload) {
            throw new Error('Cannot find your account.');
        }
        const [exp, emailVerified, email, name] = parseGooglePayload(payload);
        // Does not need to check, Google already did that.
        // if (isExpired(exp)) {
        //     throw new Error('Your request is expired, please try again.');
        // }
        if (!emailVerified) {
            throw new Error('Something wrong with your account, please try log in with another account.');
        }
        deps.logger.append(`Success=${email}`);
        return {
            userName: email,
            email: email,
            name: name,
            isSenspark: email.endsWith('@senspark.com')
        };
    },

    assignCredential: async (account: Account): Promise<void> => {
        
    }
};

function parseGooglePayload(payload: Record<any, any>): [exp: number, verified: boolean, email: string, name: string] {
    try {
        const exp = verifyNumber(payload['exp']);
        const emailVerified = verifyBoolean(payload['email_verified']);
        const email = verifyString(payload['email']);
        const name = verifyString(payload['name']);
        return [exp, emailVerified, email, name];
    } catch (e) {
        throw new ResponseError((e as Error).message, `Something went wrong, please try again later.`);
    }
}

export type Account = {
    userName: string,
    email: string,
    name: string,
    isSenspark: boolean,
};

export type GoogleSignInDeps = {
    logger: ICompactLogger,
    clientIds: Set<string>,
};