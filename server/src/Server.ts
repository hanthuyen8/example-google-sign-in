import express from "express";
import {createServer} from "http";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import {queryParser} from "express-query-parser";
import cookieParser from 'cookie-parser';
import {dataMiddleware, extMiddleware} from "./configs/ExpressExtension";
import {LoginHandler} from "./handlers/LoginHandler";
import {healthCheckHandler} from "./handlers/MiscHandlers";
import Dependencies from "./services/Dependencies";
import envConfig from "./services/EnvConfig";
import {generateAppData} from "./configs/AppData";

const app = express();
const router = express.Router();
const deps = Dependencies;
const appData = generateAppData(deps.env);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({limit: '5kb'}));
app.use(bodyParser.urlencoded({limit: '5kb', extended: true}));
app.use(queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true
}))
app.use(helmet());
app.use(extMiddleware);
app.use(dataMiddleware({
    'appData': appData,
}));

app.get('/', healthCheckHandler)
app.use('/', router)

router.post('/login', LoginHandler.googleSignIn)
router.post('/login2', LoginHandler.googleSignIn2)

const port = envConfig.port;
const server = createServer(app).listen(
    port,
    '0.0.0.0',
    () => {
        console.info(`Server started at http://localhost:${port}`);
    }
);

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeFullReload', async () => {
        await new Promise((r) => {
            server.close(() => {
                r(null)
            });
        });
    });
}