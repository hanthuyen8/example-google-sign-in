import {Request, Response} from "express";
import {z} from 'zod';
import {LoginController} from "../controllers/LoginController";
import {LoggerConfig, loggerWrapper1, loggerWrapper2} from "./Utils";
import {JwtService} from "../services/JwtService";
import {AppData} from "../configs/AppData";
import {CookieServices} from "../services/CookieService";

export const LoginHandler = {
    googleSignIn: (req: Request, res: Response): void => {
        loggerWrapper1(async (logger) => {
            const appData: AppData = res.locals.appData;
            const input = Input.loginHandler.parse(req.body);
            const deps = {
                logger,
                clientIds: appData.env.googleOAuthClientIds,
            };
            const account = await LoginController.googleSignIn(deps, input.credential, input.clientId);
        }, ...wrapperConfig('GG_SIGN_IN', res));
    },

    googleSignIn2: loggerWrapper2(async (logger, req, res) => {
        const appData: AppData = res.locals.appData;
        const input = Input.loginHandler.parse(req.body);
        const deps = {
            logger,
            clientIds: appData.env.googleOAuthClientIds,
        };
        const account = await LoginController.googleSignIn(deps, input.credential, input.clientId);
        const jwt = await JwtService.sign(appData.jwt.secret, account);
        CookieServices.set(appData.cookie, res, 'G_key', jwt, 'http-only');
        res.sendSuccess(true);
    }, 'GG_SIGN_IN'),
};

const wrapperConfig = (prefix: string, res: Response): [onError: (msg: string) => void, cfg: LoggerConfig] => {
    return [res.sendError.bind(res), {isGke: res.locals.appData.isGke, prefix: prefix}];
};

const Input = {
    loginHandler: z.object({
        credential: z.string(),
        clientId: z.string(),
    }),
};