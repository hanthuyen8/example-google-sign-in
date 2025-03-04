import 'dotenv/config'
import {bool, cleanEnv, num, str,} from 'envalid';

const readConfig = () => {
    return cleanEnv(process.env, {
        IS_GKE: bool({default: false}),
        PORT: num({default: 8083}),
        GOOGLE_OAUTH_CLIENT_IDS: str(),
        DOMAIN: str({default: 'localhost'}),
        JWT_SECRET: str({default: '1741070305175'}),
    });
};
const config = readConfig();

const Env: EnvConfig = {
    isGke: config.IS_GKE,
    port: config.PORT,
    googleOAuthClientIds: new Set<string>(config.GOOGLE_OAUTH_CLIENT_IDS.split(',')),
    domain: config.DOMAIN,
    jwtSecret: config.JWT_SECRET,
};

export type EnvConfig = {
    isGke: boolean;
    port: number;
    googleOAuthClientIds: Set<string>;
    domain: string;
    jwtSecret: string;
};

export default Env;