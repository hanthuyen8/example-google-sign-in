import {EnvConfig} from "../services/EnvConfig";

export type AppData = {
    env: EnvConfig,
    cookie: CookieConfig,
    jwt: {
        secret: string,
    }
};

export type CookieConfig = {
    domain: string,
    isHttps: boolean
}

export function generateAppData(env: EnvConfig): AppData {
    return {
        env: env,
        cookie: {
            domain: env.domain,
            isHttps: env.domain !== 'localhost',
        },
        jwt: {
            secret: env.jwtSecret,
        },
    };
}