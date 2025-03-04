import {Request, Response} from "express";
import {AppData, CookieConfig} from "../configs/AppData";

const DEFAULT_EXPIRED_SECONDS = 3600 * 24 * 365; // 1 year

export const CookieServices = {
    set(
        config: CookieConfig,
        res: Response,
        key: string,
        value: string,
        type: CookieType,
        expiredSeconds: number = DEFAULT_EXPIRED_SECONDS
    ) {
        res.cookie(key, value, {
            secure: type === 'http-only',
            domain: config.domain,
            sameSite: config.isHttps ? 'strict' : 'none',
            maxAge: expiredSeconds,
        });
    },

    get(
        req: Request,
        key: string
    ): string | undefined {
        if (!req || !req.cookies) {
            return undefined;
        }
        return req.cookies[key];
    }
};

export type CookieType = 'normal' | 'http-only';